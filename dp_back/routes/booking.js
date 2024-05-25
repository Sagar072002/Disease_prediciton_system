const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Doctor = require('../models/doctorModel');
const User = require('../models/userModel');
const Booking = require('../models/bookingModel');
const dotenv = require('dotenv');
const Stripe = require('stripe');
const authenticate = require('./auth');
dotenv.config();

router.post('/getAll', async(req,res)=>{
    try{
        const apps = await Booking.find({});

        res.json(apps);
    }catch(err){
        res.status(400).send(err);
    }
})

router.post('/checkout-session/:doctorId',authenticate, async(req,res)=>{

    try {
        console.log("Doctor:",req.params.doctorId)
        console.log("User:",req.userid)
        const doctor = await Doctor.findById(req.params.doctorId)
        const user = await User.findById(req.userid)

        const stripe = new Stripe(process.env.STRIPE_KEY)
        const session = await stripe.checkout.sessions.create({
            payment_method_types : ['card'],
            mode: 'payment',
            success_url:`${process.env.CLIENT_SITE_URL}/checkout-success`,
            cancel_url:`${req.protocol}://${req.get('host')}/doctors/${doctor._id}`,
            customer_email:user.email,
            client_reference_id:req.params.doctorId,
            line_items:[
                {
                    price_data:{
                        currency:'inr',
                        unit_amount:doctor.price*100,
                        product_data:{
                            name:doctor.name,
                            description:doctor.about,
                            // images:[doctor.photo]
                        },
                    },
                    quantity:1
                }
            ]
        })

        const booking = new Booking({
            doctor:doctor._id,
            user:user._id,
            amount:doctor.price,
            session:session.id
        })

        await booking.save()
        res.status(200).json({message:"Success", session})
    } catch (err) {
        res.status(400).json({message:"Failure", Error:err.message})
    }
})

module.exports = router;