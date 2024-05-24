const mongoose = require('mongoose');
const doctor = require('./doctorModel');

const reviewSchema = new mongoose.Schema({
        doctor:{type: mongoose.Types.ObjectId, ref: "Doctor"},
        user:{type: mongoose.Types.ObjectId, ref: "User"},
        reviewText:{type:String, required: true},
        rating:{type:Number, required: true},
    },
    {timestamps: true}
)

reviewSchema.pre(/^find/, function(next){
    this.populate({
        path:'user',
        select:"username",
    })

    next();
});

reviewSchema.statics.calcAverageRatings = async function(doctorID){
    const stats = await this.aggregate([
        {
            $match:{doctor:doctorID},
        },
        {
            $group:{
                _id:'$doctor',
                numOfRaings:{$sum:1},
                avgRating:{$avg:'$rating'}
            },
        },
    ])
    
    await doctor.findByIdAndUpdate(doctorID,{
        totalRatings: stats[0].numOfRaings,
        avgRating: stats[0].avgRating
    })
}

reviewSchema.post('save', function(){
    this.constructor.calcAverageRatings(this.doctor)
})

const review = new mongoose.model("Review", reviewSchema);
module.exports = review;