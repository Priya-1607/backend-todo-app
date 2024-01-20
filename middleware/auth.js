import { User } from "../modules/user.js";
import jwt from "jsonwebtoken";
import { MongooseError } from 'mongoose';
export const isAuthenticated= async(req,res,next)=>{
    const {token}=req.cookies;
    if(!token)
    return res.status(404).json({
 success:false,
 message:"Login First"
 });
    console.log(token);
    const decoded=jwt.verify(token,process.env.JWT_SECRET)
    req.user = await User.findById(decoded._id);
    next();

}