const { Sequelize } = require("sequelize")

const sequelize=new Sequelize("node","root","123456789",{
    host:localhost,
    dialect:root
})

module.exports=sequelize;