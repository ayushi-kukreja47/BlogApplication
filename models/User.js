import mongoose from "mongoose";

const Schema = mongoose.Schema;  //get schema class from mongoose

const userSchema = new Schema({
    name:{
        type: String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    blogs:[{type:mongoose.Types.ObjectId,ref:"Blog",required:true}]
});

export default mongoose.model("User",userSchema);
//mongodb stored as users (lowercase + plural form of collection)