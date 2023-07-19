const cloudinary = require("cloudinary");

exports.destroyMedia= async(url)=>{
    const arr = url.split("/")
  
    const public_id = (arr[arr.length-2] +"/"+arr[arr.length-1].split(".")[0]).replace("%20"," ")
    console.log(public_id);
   await cloudinary.uploader.destroy(public_id).then((err,re)=>{
      if(err)
      {console.log(err)
        return false;
    }  
      else {console.log(re);
      return true;
    }
    });
}