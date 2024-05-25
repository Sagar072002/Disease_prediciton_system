const express = require('express');
const router = express.Router();
const joi = require('joi');
const mongoose = require('mongoose');
const Admin = require('../models/adminModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const key = process.env.ADMIN_KEY;
const jwtSecret = process.env.JWT_SECRET;

function validateAdmin(admin){
    const schema = joi.object({
        adminname: joi.string().min(5).required(),
        password1: joi.string().min(8).required(),
        password2: joi.string().min(8).required().valid(joi.ref('password1')),        
        secret: joi.string().required(),
    });

    return schema.validate(admin);
}

router.post('/',async (req, res)=>{
    const { error } = validateAdmin(req.body);

    if(error){ return res.status(400).send(error.details[0].message); }

    if(req.body.secret !== key){
        return res.status(400).send("Wrong Key!!");
    }

    const encryptedpass = await bcrypt.hash(req.body.password1, 10);

    try{
        let newadmin = new Admin({
            adminname: req.body.adminname,
            password: encryptedpass
        })

        newadmin = await newadmin.save();
        res.json(newadmin);
    }catch(err) {
        res.status(400).send(err);
    }
});

router.post('/login', async(req, res)=>{
    const adminname= req.body.adminname;
    const password= req.body.password;

    if(!adminname || !password){ return res.status(400).send("Invalid request!"); }
    
    try{
        const admin = await Admin.findOne({ adminname: adminname });
        if(!admin){
            res.status(400).send("admin Not Found!");
        }
        if(admin){
            if(await bcrypt.compare(password,admin.password)){
                const token=jwt.sign({id:admin._id},jwtSecret,{
                    expiresIn: "1d",
                });
                // res.json(user._id)
                res.json({status:"OK",token,uid:admin._id});
            }
            else{ res.status(400).send("Invalid Credentials!"); }
        }
    }catch(err){
        res.status(400).send(err);
    }
});

module.exports = router;