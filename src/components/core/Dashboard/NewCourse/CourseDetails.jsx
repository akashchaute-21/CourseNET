// import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { fetchCourseDetails } from "../../../../services/operations/courseDetailsAPI";
import { useSelector } from "react-redux";
import IMG from "../../../../assets/Images/FoundingStory.png"

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  console.log(courseId)
  const [course, setCourse] = useState(null);
  const {token}=useSelector((state)=> state.auth)

  // Fetch the course details based on the id
  useEffect(() => {
    // Make an API call or fetch the course details from the server
    // Set the fetched course details in the state
    const fetchData = async () => {
      try {
        const response = await fetchCourseDetails(courseId,token);
        console.log("response",response)
        setCourse(response);
      } catch (error) {
        console.log("Error fetching course details", error);
      }
    };
    fetchData();
  }, [courseId]);
  console.log("this is rumming")
  //console.log(course)
  // return (
  //  !course?<div>no course details</div>: 
  //  <div>
  // <p> it is working {course.price}</p> 
  // <p> it is working {course.courseName}</p> 
  // <p> it is working {course.thumbnail}</p> 
  // <p> it is working {course.instructor.firstname}</p> 
  // <p> it is working {course.price}</p> 
  //   </div>
  // )
  return (
    <div>
     
      {course ? (
        <div className=" flex  justify-center items-center w-screen h-screen gap-20 transform -translate-y-8">
        <div className="flex flex-row justify-center items-center gap-10">
        <img src={course.thumbnail} alt="" className="w-[520px] h-[410px] mb-5 rounded-lg transform transition-transform duration-300 hover:scale-105 translate-y-2"/>
        
        <div className="flex flex-col gap-4  border text-white rounded-xl px-16 py-10  bg-[#2c2c6c] scroll-smooth hover:bg-transparent ease-in duration-300 border-black justify-center ">
        <h2 className="text-5xl font-bold uppercase text-[#3abde1]">{course.courseName}</h2>
        <p className="text-pure-greys-50 text-2xl font-semibold ">{course.courseDescription}</p>
        <p className="text-pure-greys-50 text-xl">Instructor: {course.instructor.firstname}</p>
        <p className="text-pure-greys-50 text-xl">What You Will Learn: <br /> {course.whatYouWillLearn}</p>
        <p className="text-pure-greys-50 text-xl">Category: {course.category.name}</p>
        <p className="text-pure-greys-50 text-xl">Students Enrolled: {course.studentsEnrolled.length}</p>
        <p className="text-caribbeangreen-100 font-semibold text-xl">Price: ${course.price}</p>
        </div>
      </div>
      </div>
        ) : ( 
         <p>Loading...</p> 
        )}
    </div>
 );
};

export default CourseDetailsPage;

// import React from 'react'

// function CourseDetails() {
//   const { id } = useParams();
//   return (
//     <div>
//       hi thereee
//     </div>
//   )
// }

// export default CourseDetails

