const jwt = require('jsonwebtoken');
const Doctor = require('../models/doctorModel');
const User = require('../models/userModel');
const dotenv = require('dotenv');
dotenv.config();

module.exports = authenticate = async (req,res,next)=>{
    const authToken = req.headers.authorization;

    if(!authToken || !authToken.startsWith("Bearer ")){
        return res.status(401).json({success: false, message:"No Token"});
    }
    try{
        const token = authToken.split(" ")[1];
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.userid = decode.id;
        next();
    }catch(err){
        if(err.name === 'TokenExpiredError'){
            return res.status(401).json({message:"Token Expired!"});
        }
        return res.status(401).json({success: false, message:"Invalid Token!"});
    }
};
