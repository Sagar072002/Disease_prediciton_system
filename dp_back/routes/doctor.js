const express = require('express');
const router = express.Router();
const joi = require('joi');
const mongoose = require('mongoose');
const Doctor = require('../models/doctorModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const authenticate = require('./auth')
const restrict = require('./restrict')
const review = require('../routes/review')

const jwtSecret = process.env.JWT_SECRET;

function validateUser(user){
    const schema = joi.object({
        username: joi.string().min(5).required(),
        email: joi.string().email().required(),
        phone: joi.number().min(10).required(),
        address: joi.string().min(8).required(),
        password1: joi.string().min(8).required(),
        password2: joi.string().min(8).required().valid(joi.ref('password1')),
        price: joi.number().required(),        
        photo: joi.string().min(0),    
        qualifications: joi.array(),        
        specialization: joi.string(),        
        about: joi.string(),        
        timeSlots: joi.array(),        
    });

    return schema.validate(user);
}

router.use('/:doctorId/reviews', review);

router.post('/',async (req, res)=>{
    const { error } = validateUser(req.body);

    if(error){
        console.log(error) 
        return res.status(400).send(error.details[0].message); }

    const encryptedpass = await bcrypt.hash(req.body.password1, 10);

    try{
        let newDoctor = new Doctor({
            name: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            password: encryptedpass,
            price:req.body.price,
            photo:req.body.photo,
            specialization:req.body.specialization,
            qualifications:req.body.qualifications,
            about:req.body.about,
            timeSlots:req.body.timeSlots,
            totalRatings:0,
            avgRating:0,
        })

        newDoctor = await newDoctor.save();
        res.json(newDoctor);
    }catch(err) {
        console.log(err)
        res.status(400).send(err);
    }
});

router.post('/get', async (req, res)=>{
    const uid = req.body.uid;

    try{
        const user= await Doctor.findOne({ _id: uid }).populate('reviews').select("-password");

        res.json(user)
    }catch(err){
        res.status(400).send(err);
    }
});

router.post('/getAll', authenticate, restrict(["admin","doctor","user"]), async (req, res)=>{
    try{
        const user= await Doctor.find({});

        res.json(user)
    }catch(err){
        res.status(400).send(err);
    }
});

router.post('/getRequired', async (req, res)=>{
    try{
        const {query} = req.query;
        let doctors;
        if(query){
            doctors = await Doctor.find({ isApproved: "approved", $or:[
                {name:{$regex:query, $options:'i'}},
                {specialization:{$regex:query, $options:'i'}}
            ] }).select("-password");
        }
        else{
            doctors=await Doctor.find({isApproved: "approved"}).select("-password");
        }

        res.json(doctors)
    }catch(err){
        res.status(400).send(err);
    }
});

router.patch('/', async(req, res)=>{
    const uid = req.body.uid
    if(!uid){ return res.status(400).send("User id is missing!"); }

    try{
        let user = await Doctor.findOne({ _id: uid })

        if(req.body.username) user.name = req.body.username;
        if(req.body.address) user.address = req.body.addressphone
        if(req.body.phone) user.phone = req.body.phone;
        if(req.body.email) user.email = req.body.email;
        if(req.body.price) user.price = req.body.price;
        if(req.body.photo) user.photo = req.body.photo;
        if(req.body.qualifications) user.qualifications = req.body.qualifications;
        if(req.body.about) user.about = req.body.about;
        if(req.body.timeSlots) user.timeSlots = req.body.timeSlots;

        user = await user.save();
        res.send(user);
    }catch(err){
        res.status(400).send(err);
    }
});

router.post('/login', async(req, res)=>{
    const email= req.body.email;
    const password= req.body.password;

    if(!email || !password){ return res.status(400).send("Invalid request!"); }
    
    try{
        const user = await Doctor.findOne({ email: email });
        if(!user){
            res.status(400).send("User Not Found!");
        }
        if(user){
            if(await bcrypt.compare(password,user.password)){
                const token=jwt.sign({id:user._id},jwtSecret,{
                    expiresIn: "1d",
                });
                // res.json(user._id)
                res.json({status:"OK",token,uid:user._id});
            }
            else{ res.status(400).send("Invalid Credentials!"); }
        }
    }catch(err){
        res.status(400).send(err);
    }
});

module.exports = router;