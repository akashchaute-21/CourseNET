const express = require("express");
const dbconnect = require("./config/database")
const userRouter = require("./routes/User.js")
const app = express();
const {
    login,
    signup,
    sendotp,
    changePassword,
  } = require("./controllers/Auth")
const cors = require('cors');
app.use(express.json())

//connecting the database 
dbconnect.dbconnect()

app.use(cors());
app.use("/auth",userRouter);




app.listen(process.env.PORT,()=>console.log("running on port ",process.env.PORT));


