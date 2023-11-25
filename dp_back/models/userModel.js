const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: { type: String , required: true, minlength: 5 },
    email: {
        type: String,
        validate: {
            validator: function (value){
                return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-z]{2,7}$/.test(value);
            },
            message: "Invalid email",
        },
        unique: true,
    },
    phone: { type: Number, minlength: 10, required: true },
    password: { type: String, minlength: 8, required: true },
});

const User = new mongoose.model('User', userSchema);

module.exports = User;