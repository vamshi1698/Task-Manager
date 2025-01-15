const express = require('express')
const router = express.Router()
const {getProfile,login,signup, logout} = require('../controller/controller')
const { hashPassword, verifyPassword } = require('../middlewares/hashed')
const { verifyToken, validateUser } = require('../middlewares/middleware')
const { createTask, getAllTasks, updateTask, deleteTask } = require('../controller/crud')

//authentication routes
router.get('/api/profile',verifyToken,getProfile)
router.post('/api/login',verifyPassword,validateUser,login)
router.post('/api/signup',hashPassword,signup)
router.post('/api/logout',verifyPassword,logout)

//create a task
router.post('/api/createtask',verifyToken,createTask)

//get all tasks
router.get('/api/alltasks',verifyToken,getAllTasks)

// update a task
router.put('/api/edit',verifyToken,updateTask)

//delete a task
router.delete('/api/delete',verifyToken,deleteTask)

exports.router  = router