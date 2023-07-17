const User  = require("../models/UserSchema")
const Course  = require("../models/Course")
const sendMail = require("../utils/sendMail")
const { default: mongoose} = require("mongoose")
const Razorpay = require("razorpay") 
require("dotenv").config()
RP_inst= new Razorpay({
    key_id:process.env.RAZORPAY_KEY_ID,
    key_secret:process.env.RAZORPAY_KEY_SECRET
})


//capture the payment and initiate the razor pay 

exports.capturePayment= async (req,res)=>{
    //get course ID and userID
    const userId = req.user.id;
    const {courseId}= req.body;
    //valid course id
    if(!courseId){
        return res.json({
            success:false,
            message:"Invalid course ID"
        })
    }
    //valid course details
    let course;
    try {
         course = await Course.findById({courseId});
        if(!course){
            return res.json({
                success:false,
                message:"no course found"
            })
        }
        
   //user already paid or enrolled inthe course
     const uid = new mongoose.Types.ObjectId(userId);
     if(course.studentsEnrolled.includes(uid)){
        return res.json({
            success:false,
            message:"student already enrolled in the course"
        })
     }
  

    } catch (error) {
        return res.json({
            success:false,
            message:eror.message
        })
    }
   //order create 
  
    

    const options={
        amount:course.price *10,
        currency:"INR",
        notes:{
          courseId,
            userId
        }
    }
    try {
        //initiate the payment
        const paymentRes = await instance.orders.create(options);
       
        return res.json({
            success:true,
            message:"payment initiated"
        })
    } catch (error) {
        return res.json({
            success:false,
            message:error.message
        })
        
    }
  
}


exports.authPayment = async (req,res)=>{
    const webhookSecret = "abcdefghi"
    const razorpaySign = req.header("x-razorpay")

    const shasum = crypto.createHmac("sha256",webhookSecret);
    shasum.update(JSON.stringify(req.body));
    const digest = shasum.digest("hex");

    if(razorpaySign=== digest){
        const {courseId,userId} = req.body.payload.entity.notes;
        try {
            //find the course and update student enrolled
            const updateCourse =await Course.findByIdAndUpdate(courseId,{
                   $push:{ studentsEnrolled:userId }
               
            }, {new:true})
            //find user and update course
            const updateUser = await User.findByIdAndUpdate(userId,{
                $push:{courses:courseId}
            })
        const emailRes = await sendMail(updateUser.email,"congrats","You have successfully registered for the course")
       //return res
       return res.json({
        success:true,
        message:"succesfully enrolled in the course"
    })
        } catch (error) {
            return res.json({
                success:false,
                message:error.message
            })
        }


    }
    else{
        return res.status(400).json({
            success:false,
            message:"signature invalid"
        })
    }
}
