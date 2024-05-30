// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_Name } from "./constants";
import express from "express";
import connectDB from "./db/database.js";

dotenv.config({
    path:"./env"
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running on port: ${process.env.PORT}`);
    })
})
.catch((err)=>{
console.log("Mongo DB connection fail:",err);
})




/** 
const app=express();

;(async()=>{

try{
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_Name}`)
    app.on("error",(error)=>{
        console.log("app not conected: ",error);
        throw error
    })

    app.listen(process.env.PORT,()=>{
        console.log(`App is listening on Port ${process.env.PORT}`)
    })

}catch(err){
    console.error("error:",err);
}

})()

*/