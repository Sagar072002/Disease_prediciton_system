const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true, unique: true},
    phone:{type: Number, required: true},
    address:{type: String, required: true},
    password:{type: String, required: true},
    price:{type: Number},
    photo:{type: String},
    specialization:{type: String},
    qualifications:{type: Array},
    about:{type: String},
    timeSlots:{type: Array},
    reviews:[{type: mongoose.Types.ObjectId, ref: "Review"}],
    totalRatings:{type: Number},
    avgRating:{type: Number},
    isApproved: {
        type: String,
        enum: ["pending", "approved", "cancelled"],
        default: "pending",
    },
})

const doctor = new mongoose.model("Doctor", doctorSchema);
module.exports = doctor;