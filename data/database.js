import mongoose from "mongoose";
import { MongooseError } from 'mongoose';

export const connectDB = ()=>{mongoose.connect(process.env.MONGO_URI,{
    dbName:"backendapi"
}).then(()=>console.log("db connected")).catch((e)=>{
    console.log(e);
})}

// https://nodejs-todo-app-mrqd.onrender.com