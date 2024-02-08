const dotenv =require('dotenv');
const express =require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/dbconfig');
//dotenv
dotenv.config()
//mongoose connection
connectDB();
//for express
const app=express();
//for cors
app.use(cors());
//for express
app.use(express.json());
//port
const PORT =3000;
//get req
app.get("/",(req,res)=>{
res.send("hello ji")
});

// app.listen(PORT,()=>{
//     console.log("hello users")
// })

mongoose.connection.once("open",()=>{
    console.log('mongoose is connected');
    app.listen(process.env.PORT || PORT,()=>{
        console.log('server is running ')
    })
})
