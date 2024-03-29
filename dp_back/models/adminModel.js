const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    adminname: { type: String , required: true, minlength: 5, unique: true },
    password: { type: String, minlength: 8, required: true },
});

const admin = new mongoose.model('admin', adminSchema);

module.exports = admin;