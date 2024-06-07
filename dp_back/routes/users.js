const express = require('express');
const router = express.Router();
const joi = require('joi');
const mongoose = require('mongoose');
const User = require('../models/userModel');
const Booking = require('../models/bookingModel');
const authenticate = require('./auth')
const restrict = require('./restrict')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const jwtSecret = process.env.JWT_SECRET;

function validateUser(user){
    const schema = joi.object({
        username: joi.string().min(5).required(),
        email: joi.string().email().required(),
        gender: joi.string().required(),
        phone: joi.number().min(10).required(),
        age: joi.number().required(),
        password1: joi.string().min(8).required(),
        password2: joi.string().min(8).required().valid(joi.ref('password1')),        
    });

    return schema.validate(user);
}

router.post('/',async (req, res)=>{
    const { error } = validateUser(req.body);

    if(error){ return res.status(400).send(error.details[0].message); }

    const encryptedpass = await bcrypt.hash(req.body.password1, 10);

    try{
        let newUser = new User({
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
            age: req.body.age,
            gender: req.body.gender,
            password: encryptedpass
        })

        newUser = await newUser.save();
        res.json(newUser);
    }catch(err) {
        res.status(400).send(err);
    }
});

router.post('/get', authenticate, restrict(["user"]), async (req, res)=>{
    const uid = req.userid;

    try{
        const user= await User.findOne({ _id: uid });

        res.json(user)
    }catch(err){
        res.status(400).send(err);
    }
});

router.patch('/', authenticate, restrict(["user"]), async(req, res)=>{
    const uid = req.userid
    if(!uid){ return res.status(400).send("User id is missing!"); }

    try{
        let user = await User.findOne({ _id: uid })

        if(req.body.username) user.username = req.body.username;
        if(req.body.phone) user.phone = req.body.phone;
        if(req.body.email) user.email = req.body.email;
        if(req.body.age) user.age = req.body.age;
        if(req.body.gender) user.gender = req.body.gender;

        user = await user.save();
        res.send(user);
    }catch(err){
        res.status(400).send(err);
    }
});

router.post('/login', async(req, res)=>{
    const username= req.body.username;
    const password= req.body.password;

    if(!username || !password){ return res.status(400).send("Invalid request!"); }
    
    try{
        const user = await User.findOne({ username: username });
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

router.post('/getAppointments', authenticate, restrict(["user"]), async(req,res)=>{
    try{
        const bookings = await Booking.find({user:req.userid});
        res.status(200).json({suucess:true,bookings})

    }catch(err){
        res.status(400).send(err);
    }
})

module.exports = router;