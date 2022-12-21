const User = require("../models/user");
const addUser=async (req, res) => {
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
}
const getUser=async(req,res)=>{
    const users=await User.findAll();
    res.status(200).json(users);
}
const deletUser=async (req,res,next)=>{
  
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
  const putUser=async(req,res)=>{
    let id = req.body.id;
    console.log(id)
    let body = req.body;
    let data = await User.update(body, {
        where: {
        id: id
        }
        });
        if (data[0] === 0) {
            return res.status(200).json({
            success: false,
            error: "No user found with this id"
            })
            return res.status(200).json({
                success: true,
                "number of rows changed": data
                })
        
            }
}
module.exports={
    addUser,
    getUser,
    deletUser,
    putUser
}