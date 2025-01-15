const mongoose = require("mongoose")

exports.connectDB = async () =>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log("Mongodb Connected"))      
    .catch((e)=>console.error(e))
}

