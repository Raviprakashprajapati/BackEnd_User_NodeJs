const mongoose = require("mongoose")

const connectToDatabase  =async()=>{
    mongoose.connect(process.env.DB_URL)
    .then((value)=>{
        console.log("Database Connected Successfully")
    })
    .catch((error)=>{
        console.log("Error While Connecting to DB",error.message)
    })
}

module.exports = connectToDatabase