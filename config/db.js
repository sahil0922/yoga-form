const cors=require('cors')
const mongoose = require('mongoose')
const {ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv')
dotenv.config()

// const mongoDBConnectionURLtoUserDetail = "mongodb://0.0.0.0:27017/userDetails"      
// ->>>> mongodb local 

// for mongodb Atlas connection 
const mongoDBConnectionURLtoUserDetail = process.env.MONGODB_URL
const connectToDB = async() =>{
    await mongoose.connect(mongoDBConnectionURLtoUserDetail , { 
        useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 
    }, (err) => {
        if(err){
            console.log(err)
        }else{
            console.log("Database conneced Successfully")
        }
    })
} 

module.exports = connectToDB;
