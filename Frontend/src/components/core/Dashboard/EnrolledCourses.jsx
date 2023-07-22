import { useEffect, useState } from "react"
import ProgressBar from "@ramonak/react-progress-bar"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { getUserEnrolledCourses } from "../../../services/operations/profileAPI"

export default function EnrolledCourses() {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
 
  const [enrolledCourses, setEnrolledCourses] = useState(null)

  useEffect(()=>{ 
   
    const fetchData = async () => { 
    
      try {
        const res = await getUserEnrolledCourses(token) 
        console.log(res)
        setEnrolledCourses(res)
      } catch (error) {
        console.log("Could not fetch enrolled courses.")
      }}
      fetchData();
    },[])

  return (
    <>
      <div className="text-4xl mb-1 font-bold text-tblue2">Enrolled Courses</div>
      <div className="h-[1.5px] my-8 w-[1000px] bg-tblue2"></div>
      {!enrolledCourses ? (
        <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
          <div className="spinner"></div>
        </div>
      ) : !enrolledCourses.length ? (
        <p className="grid h-[10vh] w-full place-content-center text-tblue2">
          You have not enrolled in any course yet.
       
        </p>
      ) : (
        <div className="my-8 text-tblue2">
         
          <div className="flex rounded-t-lg text-xl border-2 border-tblue2 font-bold bg-darkyellow ">
            <p className="w-[45%] px-5 py-3">Course Name</p>
            <p className="w-1/4 px-2 py-3">Category</p>
            <p className="flex-1 px-2 py-3">Instructor</p>
          </div>
          {/* Course Names */}
          {enrolledCourses.map((course, i, arr) => (
            <div
              className='flex items-center my-2 border-2 rounded-lg border-tblue2'>
              <div
                className="flex w-[45%] text-lg cursor-pointer items-center gap-4 px-5 py-3"
                onClick={() => {
                  navigate( 
                    `/view-course/${course?._id}/section/${course.courseContent?.[0]?._id}/sub-section/${course.courseContent?.[0]?.subSection?.[0]?._id}`
                  )
                }}
              >
                <img
                  src={course.thumbnail}
                  alt="course_img"
                  className="h-14 w-14 rounded-lg object-cover"
                />
                <div className="flex max-w-xs flex-col gap-2">
                  <p className="font-semibold">{course.courseName}</p>
                  <p className="text-xs text-richblack-300">
                    {course.courseDescription.length > 50
                      ? `${course.courseDescription.slice(0, 50)}...`
                      : course.courseDescription}
                  </p>
                </div>
              </div>
              <div className="w-1/4 px-2 py-3">{course?.category?.name}</div>
              <div className="flex w-1/5 flex-col gap-2 px-2 py-3">
                <p> {course?.instructor?.firstname+" "+course?.instructor?.lastname}</p>

              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
