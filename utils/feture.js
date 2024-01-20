import jwt from "jsonwebtoken"
import { MongooseError } from 'mongoose';
export const sendCookie=(user,res,message,statusCode=200)=>{
    const token = user ? jwt.sign({ _id: user._id }, process.env.JWT_SECRET) : null;
res.status(statusCode).cookie("token",token,{

    httpOnly:true,
    maxAge:15*60*1000,
    sameSite:process.env.NODE_ENV==="Develpoment"?"lax":"none",
    secure:process.env.NODE_ENV==="Develpoment"?false:true
}).json
({
    success:true,
    message
})
}