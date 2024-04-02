const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    doctor:{type: mongoose.Types.ObjectId, ref:"Doctor"},
    user:{type: mongoose.Types.ObjectId, ref:"User"},
    amount:{type: Number},
    session:{type: String},
})

const booking = new mongoose.model("Booking",bookingSchema);
module.exports = booking;