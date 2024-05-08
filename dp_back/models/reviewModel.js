const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
        doctor:{type: mongoose.Types.ObjectId, ref: "Doctor"},
        user:{type: mongoose.Types.ObjectId, ref: "User"},
        reviewText:{type:String, required: true},
        rating:{type:Number, required: true},
    },
    {timestamps: true}
)

const review = new mongoose.model("Review", reviewSchema);
module.exports = review;