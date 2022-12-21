const Sequelize=require("sequelize");
const sequelize = require("../util/db");
// const DataTypes = require('mysql2');
const db=require("../util/db");
const User=sequelize.define("task",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        autoNull:false,
        primaryKey:true
    },
    name: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      dateofbirth: {
        type: Sequelize.DATE
      },
      address: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      mobile_number: {
        type: Sequelize.STRING
      }
},{
    timestamps:false
});
module.exports=User;