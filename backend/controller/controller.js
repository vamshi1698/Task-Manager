const {user,tasks} = require('../db/models')
const jwt = require('jsonwebtoken')
exports.signup = async(req,res)=>{
    const {username,email,password} = req.body
    try{
        const userData = await user.create({username,email,password})
        console.log(userData.password)
        if(userData){
            console.log(userData._id)
            const token = jwt.sign({ id: userData._id }, process.env.SECRETE_KEY)
            res.cookie('token',token)
            return res.status(201).json(token)
        }
    }catch(e){
        res.status(403).json(e.message)
    }
}

exports.logout = (req,res)=>{
    res.cookie('token',null)
    res.json({message:"Logged out successfully"})
}

exports.getProfile = async(req,res)=>{
    const id = req.id
    const profile = await user.findOne({_id:id})
    const {username,email} = profile
    return res.status(200).json({username,email})
}

exports.login =async (req,res)=>{
    const userData =  req.user
    try{
        console.log(userData)
        if(userData){
            const token = jwt.sign({ id: userData._id }, process.env.SECRETE_KEY)
            res.cookie('token',token)
            return res.status(200).json(token)
        }
    }catch(e){
        return res.status(403).json(e.message)
    }
    res.status(403).json({message:"user not found"})
}