import { Request, Response } from "express"
import User from "../models/User"
import { generateToken,clearToken } from "../utils/auth";

const registerUser = async (req:Request,res:Response)=>{
    const {name,email,password,userImage} = req.body;
    const userExist = await User.findOne({email});

    if (userExist){
        res.status(409).json({message:"User is already exist"});
    }
    else{
        const user = await User.create({
            name,email,password,userImage,
        })

        if (user) {
          generateToken(res, {
            userId: user._id,
            userEmail: user.email.toString(),
            roles: user.roles.map((role) => role.toString()),
          });
          res.status(201).json({
            id: user._id,
            name: user.name,
            email: user.email,
            roles: user.roles,
            userImage: user.userImage,
          });
        } else {
          res
            .status(400)
            .json({ message: "An error occurred in creating the user" });
        }
    }
}
const loginUser = async ( req:Request,res:Response)=>{
    const {email,password} =req.body; 
    const user = await User.findOne({email});
    
    if (user && (await user.comparePassword(password))){
        generateToken(res, {
            userId: user._id,
            userEmail: user.email.toString(),
            roles: user.roles.map((role) => role.toString()),
          });
        res.status(201).json({
            id: user._id,
            email: user.email,
            name: user.name,
            roles: user.roles,
          });  
    }else {
        res.status(401).json({ message: "User not found / password incorrect" });
    }
}

const logoutUser = (req:Request,res:Response)=>{
    clearToken(res);
    res.status(200).json({ message: "User logged out" });
}
 
export {registerUser,loginUser,logoutUser}