const mongoose = require("mongoose");
require("dotenv").config();
const cloudinary = require("cloudinary").v2

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_API_SECRET 
  });

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