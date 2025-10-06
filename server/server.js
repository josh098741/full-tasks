require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()

const connectDB = require('./configs/mongoosedb')
const taskRoutes = require('./routers/taskRouter')

app.use(cors())
app.use(express.json())

app.use('/api/task',taskRoutes)

const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI
const start = async () => {
    try{
        await connectDB(MONGO_URI)
        app.listen(PORT, () => {
            console.log(`Server stated on port ${PORT}`)
        })
    }catch(error){

    }
}
start()