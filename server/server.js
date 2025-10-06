require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())


const PORT = process.env.PORT || 5000
const start = async () => {
    try{
        app.listen(PORT, () => {
            console.log(`Server stated on port ${PORT}`)
        })
    }catch(error){

    }
}
start()