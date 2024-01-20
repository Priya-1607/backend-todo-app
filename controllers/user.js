import { User } from "../modules/user.js";
import bcrypt from "bcrypt"
import { MongooseError } from 'mongoose';
import jwt from "jsonwebtoken"
import { sendCookie } from "../utils/feture.js";
import ErrorHandler from "../middleware/error.js";
export const getAlluser = async (req,res)=>{

   
    }

export const register = async (req,res,next)=>{
    const {name,email,password}=req.body
    let user=await User.findOne({email})
    if(user)return next(new ErrorHandler("user already exist",400))

const hashedPassword= await bcrypt.hash(password,10)
await User.create({name,email,password:hashedPassword});
sendCookie(user,res,"Registerd Successfuly",201)
// const token= jwt.sign({_id:user._id},process.env.JWT_SCREAT)

        }

        export const login = async (req,res,next)=>{
            const {email,password}=req.body;
            const user=await User.findOne({email}).select("+password");
            if(!user)return next(new ErrorHandler("user Does not exist",400))
           
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch)return next(new ErrorHandler("Invalid user",400))
           sendCookie(user,res,`Welcome back ${user.name}`,200) 
                }

export const getMyProfile = (req,res)=>{
   const id="myid";
  
    res.status(200).json({
        success:true,
        user:req.user
    })
   
    }
    export const logout = (req,res)=>{
       
         res.status(200).cookie("token","",{expires:new Date(Date.now())}).json({
             success:true,
             user:req.users
         })
        
         }
     
    