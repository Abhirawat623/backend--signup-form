const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    username:{type:String, required:true},
    number:{type:Number,requred:true,unique:true},
    email:{type:String,requred:true,unique:true},
    password:{type:String,requred:true}
},{
    timestamps:true
});

const User =mongoose.model("User",userSchema);

module.exports= User;