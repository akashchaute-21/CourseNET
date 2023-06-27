const course = require("./../models/Course")
const tag = require("./../models/Tags")
const user = require("./../models/UserSchema")
const uploadImage = require("../utils/imageUploader")

//create course
exports.createCourse = async(req,res)=>{
    try {
        //fetchdata 
     const {courseName,courseDescription,WhatYouWillLearn, price, tag}=req.body;
        //get thumbnail
        const thumbNail = req.files.thumbnailImage;

        if(!courseName|| !courseDescription || !WhatYouWillLearn || !tag ||!price){
            return res.status(400).json({
                success:false,
                message:"all fields are required"
               })
        }
        
        //find the instructor
         const userId = req.user.id;
         const InstructorDetails = await user.findById({userid}) 
        
         if(!InstructorDetails){
            return res.status(500).json({
                success:false,
                message:"instructor detail not found"
               })
         }
         //check tag is valid or not
         const tagDetails = await tag.findById(tag);
         if(!tagDetails){
            return res.status(500).json({
                success:false,
                message:"tag not found"
               })
         }

         //upload image to cloudinary
         const thumbnailImage = await uploadImage(thumbNail,process.env.FOLDER_NAME)
       
         //create an entry for new course 
         const newCourse= await course.create({
            courseName,
            courseDescription,
            instructor:InstructorDetails._id,
            whatYouWillLearn,
            price,
            tag:tagDetails._id,
            thumbnail:thumbnailImage
         })

         //add the new course to the user (instrutor) 
         await user.findByIdAndUpdate({_id:InstructorDetails},{
            $push:{
                courses:newCourse._id
            }
         })
         //update the tag schema 
         await tag.findByIdAndUpdate({_id:tagDetails._id},{
            $push:{
                courses:newCourse._id
            }
         })
         // send res
         return res.status(200).json({
            success:true,
            message:"course created"
           })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
           })
    }
}  


//get all courses 
exports.getAllCourses = async(req,res)=>{
  try {
        const courses = await course.find({}).populate("instructor").exec()
       if(!courses){
           return res.status(400).json({
               success:false,
               message:"no course found"
              })
       }
       return res.status(200).json({
        success:true,
        message:"courses fetched sucessfully",
        courses
       })
  } catch (error) {
    return res.status(500).json({
        success:false,
        message:error.message
       })
  }
}

exports.getCourseDetails = async (req,res)=>{
    try {
        //fetch course id
        const {courseId} = req.body;
        //find course
        const courseDetails = await Course.findById(courseId).populate({
            path:"instructor",
            populate:{
                path:aditionalDetails
            }
        }).populate("category").populate("ratingAndreviews").populate({
            path:"courseContent",
            populate:{
                path:"subSection"
            }
        }).exec()
        if(!courseDetails){
            return res.json({
                success:false,
                message:"course not found"
            })   
        }
          //return response
          return res.status(200).json({
            success:true,
            message:"data fetched",
            courseDetails
        })

    } catch (error) {
         //return response
         return res.status(500).json({
            success:false,
            message:error.message,
            courseDetails
        })
    }
}