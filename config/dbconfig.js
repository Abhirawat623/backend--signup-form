const mongoose = require('mpngoose');

const connectDB= async()=> {
try{
await mongoose.connect("")
}
catch(error)
{console.log(error)}
}