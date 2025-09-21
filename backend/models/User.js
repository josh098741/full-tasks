const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

UserSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

UserSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

UserSchema.methods.generateAuthToken = function(){
    return jwt.sign(
        {id: this._id, username: this.username},
        process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_DATE}
    );
};

module.exports = mongoose.model('User',UserSchema)