const express = require("express");
const fileupload = require("express-fileupload")
const dbconnect = require("./config/database")
const userRouter = require("./routes/User.js")
const profileRouter = require("./routes/Profile")
const courseRouter = require("./routes/Course")
const paymentRouter = require("./routes/Payment")
const app = express();

const cors = require('cors');
app.use(express.json())
app.use(fileupload({
    useTempFiles:true,
    tempFileDir:'/tmp/'
}));

//connecting the database 
dbconnect.dbconnect()

app.use(cors());

app.use("/auth",userRouter);
app.use("/profile",profileRouter);
app.use("/course",courseRouter);
app.use("/payment",paymentRouter);



app.listen(process.env.PORT,()=>console.log("running on port ",process.env.PORT));


