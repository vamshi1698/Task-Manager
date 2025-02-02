const bcrypt = require('bcrypt')
const { user } = require('../db/models')
exports.hashPassword = async (req,res,next)=>{
    const {username,password} = req.body
    const profile = await user.findOne({username})
    console.log(profile)
    if(profile){
        return res.status(409).json({message:'This username already exist'})
    }
    const hashedPassword =await bcrypt.hash(password,10) 
    req.body.password = hashedPassword 
    next(); 
}

exports.verifyPassword = async(req,res,next)=>{
    const {username,password} = req.body
    const  profile = await user.findOne({username})
    if(!profile){
        return res.status(403).json({message : "Signup first"})  
    }
    const isPassword =await bcrypt.compare(password, profile.password)
    if(!isPassword){
        return res.status(403).json({message:"wrong password"})
2    }
    req.user = profile 
    next()
}