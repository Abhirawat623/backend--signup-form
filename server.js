const dotenv =require('dotenv');
const express =require('express');
const cors = require('cors');
const mongoose = require('mongoose');

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

app.listen(PORT,()=>{
    console.log("hello users")
})

