require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { connectDB } = require('./db/connectdb')
const {router} = require('./routes/routes')
const cookieParser = require('cookie-parser')
const app = express()
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))
app.use(cookieParser())
app.use(express.json())
const PORT = process.env.PORT || 3001
app.use('/',router)
connectDB()
app.listen(PORT,()=>console.log(`server is running at port ${PORT}`))