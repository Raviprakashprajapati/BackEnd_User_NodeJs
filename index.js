require("dotenv").config()
const express = require("express")
const cors = require("cors")
const userRoute = require("./routes/userRoutes");
const app  =express()
const connectToDatabase= require("./congif/dbConnection")



app.use(cors())
// middleware to work with json data
app.use(express.json())

app.use("/",userRoute)

const PORT = process.env.PORT || 5000

connectToDatabase()
console.log("------------------------------------")
app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}.....`)
    
})





