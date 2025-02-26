const jwt = require('jsonwebtoken')
exports.verifyToken =async (req,res,next)=>{
    token = req.cookies.token
    if(!token){
        return res.status(403).json({message:"No token "})
    }
    try{
        const data =jwt.verify(token,process.env.SECRETE_KEY)
        if(data){
            req.id = data.id
        }
        next()
    }catch(e){
        return res.status(403).json({error:"Invalid token",message:e.message})
    }
}

exports.validateUser = async(req,res,next)=>{
    const {username,password} = req.body
    if(!username || !password){
        return res.status(403).json({error :"username,password required"})
    }
    next()   
}