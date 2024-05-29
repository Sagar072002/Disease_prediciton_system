const jwt = require('jsonwebtoken');
const Doctor = require('../models/doctorModel');
const User = require('../models/userModel');
const Admin = require('../models/adminModel');
const dotenv = require('dotenv');
dotenv.config();

module.exports = restrict = (roles) => async(req, res, next)=>{
    const uid = req.userid;
    let person;

    const user= await User.findById(uid);
    const doctor= await Doctor.findById(uid);
    const admin= await Admin.findById(uid);

    if(user){
        person = "user";
    }
    if(doctor){
        person = "doctor";
    }
    if(admin){
        person = "admin";
    }
    if(!roles.includes(person)){
        return res.status(401).json({success: false, message:"You are not authorized!"});
    }
    next();
};