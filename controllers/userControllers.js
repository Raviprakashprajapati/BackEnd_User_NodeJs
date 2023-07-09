const  userModel = require("../models/userModel")

// to register user----

exports.registerUser = async(req,res)=>{
    
    const {name,email,password} = req.body
    try {
        // create a document in database--
        const userData= await userModel.create({...req.body})

        res.status(200).json({
            success:true,
            message:"User Created Successfully!",
            userData
        })
        
    } catch (error) {
        console.log("Eror in Register!", error)
        res.status(400).json({
            success:false,
            message:error.message
        })
    }

}

exports.loginUser = async(req,res)=>{

    const {email,password}=req.body
    try {
        const userData = await userModel.findOne({email})
        if (userData)
         {
            // checking password provided by user is corect or not---
            if (userData.password==password) {
                res.status(200).send({
                    message:"User Login Succesfully ,Enjoy!"
                })
            }
            else
            {
                res.status(404).send({
                    message:"No Account Find with this Email ,Sorry!"
                })

            }
        }
        

    } catch (error) {
        res.status(400).send({
            message:error.message
        })
        
    }

}