const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/matrimony")

connect.then(()=>{
    console.log("Database is connected")
})
.catch(()=>{
    console.log("error")
})





const dschema= new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    name :{
        type : String,
        required : true
    },
    password :{
        type : String,
        required : true
    },
    uname :{
        type : String,
        required : true
    },
    age :{
        type : Number,
        required : true
    },
    gender :{
        type : String,
        required : true
    },
    religion:{
        type : String,
        required : true
    },
    caste:{
        type : String,
        required : true
    },
    mothertongue :{
        type : String,
        required : true
    },
    status :{
        type : String,
        required : true
    },
    qualification :{
        type : String,
        required : true
    },
    occupation :{
        type : String,
        required : true
    },
    salary :{
        type : String,
        required : true
    },
    height :{
        type : String,
        required : true
    },
    weight :{
        type : String,
        required : true
    },
    state :{
        type : String,
        required : true
    },
    country :{
        type : String,
        required : true
    }
   
})

const det= new mongoose.model("profiles",dschema)


module.exports = det;