const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
const User = require("./models/user");
const sequelize = require("./util/db");
const user=require("./routes/user")
app.use(cors());
app.use(express.json());

app.use(user);
//http://localhost:4000/task/:id

sequelize.sync()
    .then(() => {
        app.listen(4000)
    })
    .catch((err) => {
        console.log(err);
    })
