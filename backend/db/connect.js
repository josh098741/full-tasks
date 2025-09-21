const mongoose = require('mongoose');

const connectDB = async (url) => {
    try{
        await mongoose.connect(url);
        console.log('Database was loaded successfully');
    }catch(error){
        console.log('There was an error in loading the database')
    }
}

module.exports = connectDB