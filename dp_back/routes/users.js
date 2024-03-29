const express = require('express');
const router = express.Router();
const joi = require('joi');
const mongoose = require('mongoose');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const jwtSecret = process.env.JWT_SECRET;

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

    const encryptedpass = await bcrypt.hash(req.body.password1, 10);

    try{
        let newUser = new User({
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
            password: encryptedpass
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

router.post('/getAll', async (req, res)=>{
    try{
        const user= await User.find({});

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
        const user = await User.findOne({ username: username });
        if(!user){
            res.status(400).send("User Not Found!");
        }
        if(user){
            if(await bcrypt.compare(password,user.password)){
                const token=jwt.sign({},jwtSecret);
                res.json(user._id)
                // res.json({status:"OK",data:token});
            }
            else{ res.status(400).send("Invalid Credentials!"); }
        }
    }catch(err){
        res.status(400).send(err);
    }
});

// router.post('/userData',async(req,res)=>{
//     const token = req.token;
//     try{
//         const user = jwt.verify(token, jwtSecret);
//         const name = user.username;
//         user.findOne
//     }
// });

module.exports = router;