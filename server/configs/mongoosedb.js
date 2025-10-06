const mongoose = require('mongoose')

const connectDB = async (url) => {
    try{
        await mongoose.connect(url)
        console.log("Connected to mongo database successfully")
    }catch(error){
        console.log("There was an error in starting the database")
    }
}

module.exports = connectDB