const path=require("path");
const express=require("express");
const cors=require("cors");
const app=express();
const User=require("./models/user");
const sequelize=require("./util/db");
app.use(cors());
app.use(express.json());

app.post("/task",async(req,res)=>{
    const {name,}
})



sequelize.sync()
.then(()=>{
app.listen(3000)
})
.catch((err)=>{
    console.log(err);
})