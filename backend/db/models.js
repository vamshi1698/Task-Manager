const mongoose = require('mongoose')

//user schema
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
},{timestamps:true})
const user = mongoose.model('users',userSchema)
exports.user  = user

//task schema
const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    },
    user_id :{
        type:String,
        required:true
    }
},{timestamps:true})
exports.tasks = mongoose.model('tasks',taskSchema)
