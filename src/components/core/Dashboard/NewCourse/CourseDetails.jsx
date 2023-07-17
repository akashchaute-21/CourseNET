// import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const CourseDetailsPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  // Fetch the course details based on the id
  useEffect(() => {
    // Make an API call or fetch the course details from the server
    // Set the fetched course details in the state
    const fetchCourseDetails = async () => {
      try {
        const response = await fetch(`/api/courses/${id}`);
        const data = await response.json();
        setCourse(data);
      } catch (error) {
        console.log("Error fetching course details", error);
      }
    };

    fetchCourseDetails();
  }, [id]);

  return (
    <div>
      {course ? (
        <div>
          <h2>{course.courseName}</h2>
          <p>{course.courseDescription}</p>
          <p>Instructor: {course.instructor}</p>
          <p>What You Will Learn: {course.whatYouWillLearn}</p>
          <p>Status: {course.status}</p>
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

