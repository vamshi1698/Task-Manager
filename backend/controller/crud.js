const { tasks } = require("../db/models")
exports.createTask = async(req,res)=>{
    const {title,details} = req.body
    const user_id = req.id
    if(!title || !details){
        return res.json({message:"title,details are required"})
    }
    try{
        const task =await tasks.create({title,details,user_id})
        return res.status(200).json(task)
    }catch(e){
        res.status(404).json({message:"something went wrong"})
    }
}

exports.getAllTasks = async(req,res)=>{
    const id = req.id
    const taskslist = await tasks.find({user_id:{$in:id}})
    if(!taskslist){
        return res.status(404).json({message:"no tasks found"})
    }
    res.json(taskslist)
}  

exports.updateTask = async(req,res)=>{
    const id = req.query.id
    const {name,details} = req.body
    if(!title || !details){
        return res.json({message:"title,details are required"})
    }
    try{
        const updatedTask = await tasks.findOneAndUpdate({_id:id},{name,details},{new:true})
        return res.status(204).json(updatedTask)
    }catch(e){
        return res.status(403).json({message:e.message})
    }
}

exports.deleteTask = async(req,res)=>{
    const id = req.query.id
    try{
        const response = await tasks.findOneAndDelete({_id:id})
        if(response){
            return res.json(response)
        }else{
            return res.status(404).json({message:"No task found with the id"})
        }
    }catch(e){
        return res.status(403).json({message:e})
    }
}