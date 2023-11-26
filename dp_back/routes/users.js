const express = require('express');
const router = express.Router();
const joi = require('joi');
const mongoose = require('mongoose');
const User = require('../models/userModel');

function validateUser(user){
    const schema = joi.object({
        username: joi.string().min(5).required(),
        email: joi.string().email().required(),
        phone: joi.number().min(10).required(),
        address: joi.string().min(8).required(),
        password1: joi.string().min(8).required(),
        password2: joi.string().min(8).required().valid(joi.ref('password1')),        
    });

    return schema.validate(user);
}

router.post('/',async (req, res)=>{
    const { error } = validateUser(req.body);

    if(error){ return res.status(400).send(error.details[0].message); }

    try{
        let newUser = new User({
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password1
        })

        newUser = await newUser.save();
        res.json(newUser);
    }catch(err) {
        res.status(400).send(err);
    }
});

router.post('/get', async (req, res)=>{
    const uid = req.body.uid;

    try{
        const user= await User.findOne({ _id: uid });

        res.json(user)
    }catch(err){
        res.status(400).send(err);
    }
});

router.patch('/', async(req, res)=>{
    const uid = req.body.uid
    if(!uid){ return res.status(400).send("User id is missing!"); }

    try{
        let user = await User.findOne({ _id: uid })

        if(req.body.username) user.username = req.body.username;
        if(req.body.address) user.address = req.body.addressphone
        if(req.body.phone) user.phone = req.body.phone;
        if(req.body.email) user.email = req.body.email;

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
        const user = await User.findOne({ username: username, password: password });
        if(user){ res.json(user._id); }
        else{ res.status(400).send("Invalid Credentials!"); }
    }catch(err){
        res.status(400).send(err);
    }
});

module.exports = router;