const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true,"Please enter the username"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Please enter username"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password"]
    }
})

module.exports = mongoose.model('User',UserSchema)