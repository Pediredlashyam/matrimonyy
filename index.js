
const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const coll = require("./data");
const det = require("./detailsdata")


const app = express();
exports.app = app;
const port=4000;
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set('view engine','ejs')
app.use(express.static("public"))


app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.post("/signup", async (req, res) => {
    const data = {
        name: req.body.username,
        password: req.body.password,
       
    };

    const saltrounds = 10;
    const hashed = await bcrypt.hash(data.password, saltrounds);
    data.password = hashed;

    const existed = await coll.findOne({ name: data.name });
    if (existed) {
        res.send("user already exists");
    } else {
        const userdata = await coll.insertMany(data);

        console.log(userdata);
    }
    res.render("details");

});


app.post("/login",async (req,res)=>{
    try{
        const check = await coll.findOne({name : req.body.username});
        if(!check){
            res.send("username not there");
        }

        const passwordverify =await  bcrypt.compare(req.body.password,check.password);
        if(passwordverify){
            res.render("home")
        }else{
            res.send("wrong password")
        }

    }catch{
   res.send("wrong details")
    }
})
app.post("/register",async (req,res)=>{
    const data = {
        name: req.body.username,
        password: req.body.password,
        uname: req.body.uname,
        age : req.body.age,
        gender: req.body.gender,
        religion: req.body.religion,
        caste: req.body.caste,
        mothertongue: req.body.mothertongue,
        status: req.body.status,
        qualification: req.body.qualification,
        occupation: req.body.occupation,
        salary: req.body.salary,
        height: req.body.height,
        weight: req.body.weight,
        state: req.body.state,
        country: req.body.country


 };

 const userdata = await det.insertMany(data);

 res.render("home");

})


app.listen(port,(req,res)=>{
    console.log(`listening at port ${port}`)
})