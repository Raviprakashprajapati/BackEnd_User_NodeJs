const express = require("express")
const userRoute = express.Router()

// access controllers functions
const {registerUser,loginUser} = require("../controllers/userControllers")



userRoute.post("/register",registerUser)
userRoute.post("/login",loginUser)


module.exports = userRoute