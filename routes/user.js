const path =require("path");
const express=require("express");
const router=express.Router();
const User = require("../models/user");
const userController=require("../controller/user")

router.post("/task",userController.addUser)
router.get("/task",userController.getUser)
router.delete("/task",userController.deletUser)
router.put("/task",userController.putUser)
module.exports=router;