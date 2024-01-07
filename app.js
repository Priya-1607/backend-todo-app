import express  from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import { newTask } from "./controllers/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddlerware } from "./middleware/error.js";
import cors from "cors"

config({
    path:"./data/config.env"
})
export const app=express()
app.use(express.json())
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))
app.use(cookieParser())
app.use("/api/v1/users",userRouter);
app.use("/api/v1/task",taskRouter);


app.get("/",(req,res)=>{
    res.send("Nice working")
})
app.use(errorMiddlerware)

