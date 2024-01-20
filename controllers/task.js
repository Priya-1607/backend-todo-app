import ErrorHandler from "../middleware/error.js";
import {Task} from "../modules/task.js"
import { MongooseError } from 'mongoose';

export const newTask= async(req,res,next)=>{
try {
    const {title,description}=req.body;
await Task.create({
    title,
    description,
    user:req.user
})

res.status(201).json({
    success:true,
    message:"Task Added Successfuly"
})
} catch (error) {
    next(error);
    
}
}
export const getMyTask= async (req,res,next)=>{
   try {
    const userid=req.user._id;
    const tasks= await Task.find({user:userid})
    res.status(200).json({
        success:true,
        tasks,
    })
    
   } catch (error) {
    next(error)
    
   }
}
export const updateTask= async (req,res,next)=>{
   
  try {
    const task=await Task.findById(req.params.id)
    task.isCompleted=!task.isCompleted;
    await task.save()
     res.status(200).json({
         success:true,
         message:"Task Updated"
         
     })
  } catch (error) {
    next(error)
    
  }
}
export const deleteTask= async (req,res,next)=>{
   try {
    const task=await Task.findById(req.params.id)
    if(!task) return next(ErrorHandler("Task not Fond",404))
    task.isCompleted=!task.isCompleted;
    await task.deleteOne()
    res.status(200).json({
        success:true,
        message:"Task Deleted"
       
    })
    
   } catch (error) {
    next(error)
    
   }
}