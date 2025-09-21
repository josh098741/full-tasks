require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

const connectDB = require('./db/connect')

app.use(express.json())
app.use(cors())


const PORT = process.env.port || 5000

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => {
            console.log(`App running on port ${PORT}`)
        })
    }catch(error){
        console.error("An error occured on running the backend")
    }
}

start()