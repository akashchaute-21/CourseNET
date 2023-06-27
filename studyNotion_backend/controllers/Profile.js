const Profile = require("../models/Profile")
const User = require("../models/UserSchema")
const Course = require("../models/Course")
exports.updateProfile = async(req,res)=>{
   try {
     //get data
     const {DOB="",about="" , contact, gender}=req.body;
     //get user id
     const userId=req.user.id
     //validate
     //find profile id
     const userDetail = await User.findById(userId);
     const profileId = userDetail.aditionalDetails 
       //update profile
     await Profile.findByIdAndUpdate(profileId,{
         DOB,
       about,
       contact,
       gender
     })
     //return res
     return res.status(200).json({
        success:true,
        message:"profile updated successfully"
    })
   } catch (error) {
    return res.status(500).json({
        success:false,
        message:error.message
    })
   }
}

//delete account 
exports.deleteAccount = async(req,res)=>{
    try {
        //get user id
    const userId = req.user.Id;
    //check valid id
    const userDetail = await User.findById(userId);
    if(!userDetail){
        return res.status(404).json({
            success:false,
            message:"no user found"
    })
}
    //delete profile
    const profileId = userDetail.aditiionalDetails;
    await Profile.findByIdAndDelete(profileId);
    //delete user from enrolled courses
    const courses = await userDetail.courses;
    await Course.findByIdAndUpdate(courses,{
        $pull:{
            userId
        }
    })
    //delete user

    await User.findByIdAndDelete(userId);
    //return user
    return res.status(200).json({
        success:true,
        message:" account deleted "
    })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
