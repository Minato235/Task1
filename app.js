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



sequelize.sync()
    .then(() => {
        app.listen(3000)
    })
    .catch((err) => {
        console.log(err);
    })