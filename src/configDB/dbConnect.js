const mongoose = require("mongoose")
require('dotenv').config()

const MONGOOSE_URL = process.env.MONGOOSE_URL

const dbConnect = () =>{
    mongoose.connect(MONGOOSE_URL)
    mongoose.connection.on("connected", ()=>{
        console.log("DB connected")
    })
    mongoose.connection.on("error", ()=>{
        console.log("error connecting ")
    })
}


module.exports = dbConnect