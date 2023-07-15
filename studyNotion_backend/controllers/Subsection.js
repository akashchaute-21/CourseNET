const SubSec = require("../models/SubSection");
const Sec = require("../models/Section");
const {  uploadFile } = require("../utils/fileUploader");


exports.createSubSec = async(req,res)=>{
  try {
      //fetch data
      const {sectionId,title, description }=req.body;
      //extract video
      const video =req.files.video;
      //validation
      if(!sectionId ||  !title ||!description||!video){
          return res.status(500).json({
              success:false,
              message:"all fields are required"
          })
      }
      //upload video to cloudinary
      const uploadVideo = await  uploadFile (video,"Lecture_Videos")
      //create a subsection
      const newSubSec = await SubSec.create({
          title,
          description,
          videoUrl:uploadVideo.secure_url
      })
      //push subsec id in section 
      const updateSec = await Sec.findByIdAndUpdate(sectionId,{
          $push:{
              subSection:newSubSec._id
          }
      },{new:true})
      //return response
      return res.status(200).json({
          success:true,
          message:"new sub section created successfully",
          data:updateSec
      })
  } catch (error) {
    return res.status(500).json({
        success:false,
        message:error.message
    })
  }
}

//upadate subsection
exports.updateSubSec = async(req,res)=>{
    try {
        const {SubsectionId,title,timeDuration, description }=req.body;
        //validate 
        if(!sectionId ||  !title ||!timeDuration ||!description||!video){
            return res.status(500).json({
                success:false,
                message:"all fields are required"
            })
        }

        //update the subsection
        await SubSec.findByIdAndUpdate(SubsectionId,{
            title,
          timeDuration,
          description,
          videoUrl:uploadVideo.secure_url

        })
        return res.status(200).json({
            success:true,
            message:"subsection updated success  fully"
        })
    
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.deleteSubSec = async(req,res)=>{
    try {
        const {sectonId} = req.body;
        //delete from db
        await SubSec.findByIdAndDelete(sectionId);
       // return res
        return res.status(200).json({
            success:true,
            message:"subsection deleted success  fully"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}