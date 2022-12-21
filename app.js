const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
const User = require("./models/user");
const sequelize = require("./util/db");
app.use(cors());
app.use(express.json());

app.post("/task", async (req, res) => {
    const {
        name,
        firstName,
        lastName,
        dateofbirth,
        address,
        email,
        mobile_number
    } = req.body;
    const data=await User.create({
        name,
        firstName,
        lastName,
        dateofbirth,
        address,
        email,
        mobile_number
    });
    res.status(201).json({
        newUserDetail:data
    })
})
app.get("/task",async(req,res)=>{
    const users=await User.findAll();
    res.status(200).json(users);
})

app.delete("/task/:id",async (req,res,next)=>{
  
    try{
    let userId=req.body.id;
    console.log(userId)
    if(!userId){
      res.status(400).json({err:'Id missing!!'})
    }
    await User.destroy({where:{id:userId}});
    console.log('delete working');
  
    res.sendStatus(200);
  }
  catch(err){
    console.log(err)
    res.status(500).json({err:'isErrored deletete section'})
  }}
  )
// app.put("/task",async (req, res) => {
//     const id=req.body.id;
//     const body=req.body;
//     const data =await User.update(body,{
//     where:{
//         id:id
//     }
// });
// if(data[0]===0){
//     return res.status(200).json({
//         success:false,
//         error:"No user found"
//     })
// }
// return res.status(200).json({
//     success:true
// })


sequelize.sync()
    .then(() => {
        app.listen(4000)
    })
    .catch((err) => {
        console.log(err);
    })
