exports.loginDataValidate = (req,res,next)=>{
    const {email,password} = req.body

    if (req.body && email && password) {
        next()
    }
    else
    {
        res.status(404).send({
            message:"All iput fields required"
        })
    }
}