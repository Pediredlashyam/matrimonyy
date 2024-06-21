const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/matrimony")

connect.then(()=>{
    console.log("Database is connected")
})
.catch(()=>{
    console.log("error")
})

const loginschema= new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    password :{
        type : String,
        required : true
    }
   
})

const coll= new mongoose.model("users",loginschema)

module.exports = coll;