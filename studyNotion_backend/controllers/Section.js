const Section = require ("../models/Section");
const Course = require("../models/Course");

exports.createSection = async(req,res)=>{
    try {
        //data fetch for req
        const {sectionName,courseId}=req.body;

        // data validation
        if(!sectionName || !courseId){
            return res.status(400).json({
                success:false,
                message:"all fields are required"
            })
        }
        //create section
        const newSec = await Section.create({
            sectionName,
            courseId
        })
        if(!newSec){
            return res.status(500).json({
                success:false,
                message:"new section could not be created"
            })
        }
        //update course with section id
       updateCourse = await Course.findByIdAndUpdate(courseId,{
            $push:{
courseContent:newSec._id
            }},{new:true}
        )
        // return response
        return res.status(500).json({
            success:true,
            message:"section created success  fully"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.updateSection = async (req,res)=>{
    try {
        //data fetch
        const {sectionName,sectionId}=req.body;

        // data validation
        if(!sectionName || !sectionId){
            return res.status(400).json({
                success:false,
                message:"all fields are required"
            })
        }
        //upadte the  db 
        const updatedSec = await Section.findByIdAndUpdate(sectionId,{
            sectionName
        },{new:true});
       
        return res.status(500).json({
            success:true,
            message:"section updated success  fully"
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.deleteSection = async(req,res)=>{
    try {
        //fetch data
        const {courseId} = req.body;
        //delete the secc
        await Section.findByIdAndDelete(courseId);
        return res.status(500).json({
            success:true,
            message:"section deleted success  fully"
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}