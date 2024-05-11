const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    doctor:{type: mongoose.Types.ObjectId, ref:"Doctor"},
    user:{type: mongoose.Types.ObjectId, ref:"User"},
    amount:{type: Number},
    session:{type: String},
})

bookingSchema.pre(/^find/, function(next){
    this.populate('user').populate({
        path:'doctor',
        select:'name'
    })

    next();
})

const booking = new mongoose.model("Booking",bookingSchema);
module.exports = booking;