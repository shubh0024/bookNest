import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';


import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 4000;

// app.get('/',(req,res)=>{
//     res.send('Hello World!');
// });

//connection 
const URI=process.env.MONGODB_URI;

const connectDb = () =>{
    try{
    mongoose.connect(URI).then(() => console.log("MongoDB connected"))
        .catch((err) => console.error("MongoDB connection error:", err));
    }catch(error){
        console.log(error,"Eror connecting");
    }      

}

//defining routes 
app.use("/book",bookRoute);
app.use("/user",userRoute);
//api for the user to register is the http:localhost:3000/user/signup




connectDb();
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})