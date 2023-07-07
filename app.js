import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes';
import blogRouter from './routes/blog-routes';

const app=express(); //express has given all its reference to app
app.use(express.json());  //read in the json format
app.use("/api/user",router);
app.use("/api/blog",blogRouter);


mongoose.connect(
    'mongodb+srv://admin:CDboacvpKPLZa7vu@cluster0.buaf4pt.mongodb.net/Blog?retryWrites=true&w=majority'
    ).then(()=>app.listen(5000))
    .then(()=>console.log("Connected to Database and listening to localhost 5000"))
    .catch((err)=>console.log(error));




//CDboacvpKPLZa7vu