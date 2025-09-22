const User = require('../models/User');

const register = async (req,res) => {
    try{
        const {username, password} = req.body;

        let user = await User.findOne({username});
        if(user) return res.status(400).json({message: "User already exists"})

        user = new User({username, password})
        await User.save()

        res.status(201).json({message: "User registered successfully"})
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

const login = async (req,res) => {
    try{
        const {username, password} = req.body

        const user = await User.findOne({username});
        if(!user){
            return res.status(500).json({message: "User does not exist"})
        }
        const isMatch = await User.comparePassword(password);
        if(!isMatch){
            return res.status(400).json({message: "Invalid Credentials"})
        }
        const token = User.generateAuthToken();
        res.json({token})
    }catch(error){
        res.status(500).json({error: error.message})
    }
};

module.exports = {
    register,
    login
}