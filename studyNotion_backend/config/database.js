const mongoose = require("mongoose");
require("dotenv").config();

exports.dbconnect = () =>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{ console.log("database connected successfully")})
    .catch((e)=>
    {console.log(e,"database connection failed")
    process.exit(1);
                        })
}