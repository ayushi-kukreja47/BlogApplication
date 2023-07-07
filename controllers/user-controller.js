import User from "../models/User";
import bcrypt from 'bcryptjs';

export const getAllUser=async(req,res,next) => {     //http request is always asychronous task
    let users;
    try {
        users=await User.find();
    } catch (error) {
        console.log(error);
    }
    if(!users){
        return res.status(404).json({message:"No user Found"});
    }
    return res.status(200).json({users});
};

export const signup=async(req,res,next)=>{
    const {name,email,password}=req.body;

    let existingUser;
    try {
        existingUser=await User.findOne({email});
    } catch (error) {
        return console.log(error);
    }
    if(existingUser){
        return res.status(400).json({message:"User already exists! Login instead"});
    }
    const hashedPassword=bcrypt.hashSync(password);

    const user= new User({
        name,
        email,
        password:hashedPassword,
        blogs:[]
    });
    
    try {
       await user.save();
    } catch (error) {
        return console.log(error);
    }
    return res.status(201).json({user});
}

export const login= async(req,res,next)=>{
    const {email,password}=req.body;
    let existingUser;
    try {
        existingUser=await User.findOne({email});
    } catch (error) {
        return console.log(error);
    }
    if(!existingUser){
        return res.status(404).json({message:"Couldn't Find user by this email"});
    }

    const isPsswordCorrect=bcrypt.compareSync(password,existingUser.password);
    if(!isPsswordCorrect){
        return res.status(400).json({message:"Incorrect password"});
    }
    return res.status(200).json({message:"Login Successfully"});
    

}