// import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { fetchCourseDetails } from "../../../../services/operations/courseDetailsAPI";
import { useSelector } from "react-redux";

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
  console.log("course",course)
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
        <div>
          <h2>{course.courseName}</h2>
          <p>{course.courseDescription}</p>
          <p>Instructor: {course.instructor.firstname}</p> 
          <p>What You Will Learn: {course.whatYouWillLearn}</p>
            <p>Price: {course.price}</p>   
           <p>Thumbnail: {course.thumbnail}</p>
          <p>Category: {course.category}</p>
          <p>Students Enrolled: {course.studentsEnrolled.length}</p>
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

