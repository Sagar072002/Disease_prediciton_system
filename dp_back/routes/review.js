const express = require('express');
const router = express.Router({mergeParams: true});
const mongoose = require('mongoose');
const Doctor = require('../models/doctorModel');
const Review = require('../models/reviewModel');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const authenticate = require('./auth')
const restrict = require('./restrict')

router.get('/', async(req,res)=>{
    try{
        const reviews = await Review.find({});

        res.status(200).json({message:"Success", data:reviews});
    }catch(err){
        res.status(404).json({message:"Failure", Error:err});
    }
})

router.post('/',authenticate,restrict(['user']), async(req, res)=>{

    if(!req.body.doctor) req.body.doctor = req.params.doctorId;
    if(!req.body.user) req.body.user = req.userid;

    const newReview = new Review(req.body);

    try {
        const savedReview = await newReview.save();
        await Doctor.findByIdAndUpdate(req.body.doctor,{
            $push:{reviews: savedReview._id}
        })
        res.status(200).json({message:"Success", data:savedReview});
    } catch (err) {
        res.status(500).json({message:"Failed to add review", Error:err.message});
    }
})

module.exports = router;