import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { fetchInstructorCourses } from "../../../services/operations/courseDetailsAPI"
import { getInstructorData } from "../../../services/operations/profileAPI"
import InstructorChart from "./InstructorDashboard/InstructorChart"

export default function Instructor() {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const [loading, setLoading] = useState(false)
  const [instructorData, setInstructorData] = useState(null)
  const [courses, setCourses] = useState([])

  useEffect(() => {
    ;(async () => {
      setLoading(true) 
      const instructorApiData = await getInstructorData(token)
      const result = await fetchInstructorCourses(token)
      console.log("API",instructorApiData.length)
      if (instructorApiData.length) setInstructorData(instructorApiData)
      if (result) {
        setCourses(result)
      }
      setLoading(false)
    })()
  }, [])

  const totalAmount = instructorData?.reduce(
    (acc, curr) => acc + curr.totalAmountGenerated,
    0
  )

  const totalStudents = instructorData?.reduce(
    (acc, curr) => acc + curr.totalStudentsEnrolled,
    0
  )
  

  return (
    <div >
     
        <h1 className="text-4xl mb-1 font-bold text-tblue2">
          My Dashboard
        </h1>
        <div className="h-[2px] my-8 w-[1000px] bg-tblue2"></div>

      {loading ? (
        <div className="spinner"></div>
      ) :   courses.length > 0 ? (


        <div className="flex flex-col justify-center">
          <div className="my-4 flex flex-col gap-4 ">
            
            {/* Total Statistics */}
            <div className="flex flex-col rounded-lg border-2 border-tblue2 bg-darkyellow p-5 gap-4">

            <div className="text-3xl font-bold flex justify-center text-tblue2">Statistics</div>
            <div className="flex flex-row justify-between">

            <div className="flex justify-center items-center gap-3">
                  <p className="text-2xl flex text-tblue2">Total Courses:</p>
                  <p className="text-3xl font-semibold text-tblue2">
                    {courses.length}
                  </p>
            </div>
            <div className="flex justify-center items-center gap-3">
                  <p className="text-2xl text-tblue2">Total Students:</p>
                  <p className="text-3xl font-semibold text-tblue2">
                    {totalStudents}
                  </p>
            </div>
            <div className="flex justify-center items-center gap-3">
                  <p className="text-2xl text-tblue2">Total Income:</p>
                  <p className="text-3xl font-semibold text-tblue2">
                    Rs. {totalAmount}
                  </p>
            </div>

            </div>
            </div>

            </div>
  
            <div className="flex">
            {/* Render chart / graph */}
            {totalAmount > 0 || totalStudents > 0 ? (
              <InstructorChart courses={instructorData} />
            ) : ( 
              <div className="flex-1 rounded-md bg-richblack-800 p-6">
                <p className="text-lg flex font-bold text-richblack-5 justify-center">Visualize</p>
                <p className="mt-4 text-xl font-medium text-richblack-50">
                  Not Enough Data To Visualize
                </p>
              </div>
            )}
            </div>

          <div className="rounded-lg flex-col border-2 border-tblue2 bg-darkyellow p-6 mt-4">
            {/* Render 3 courses here*/}
            <div className="flex items-center justify-between">
              <p className="text-lg font-bold text-tblue2">Your Courses</p>
              <Link to="/dashboard/my-courses">
                <p className="font-semibold text-tblue2">View All</p>
              </Link>
            </div>
            <div className="my-4 flex items-start space-x-6">
              {courses.slice(0, 3).map((course) => (
                <div key={course._id} className="w-1/3">
                  <img
                    src={course.thumbnail}
                    alt={course.courseName}
                    className="h-[201px] w-full rounded-md object-cover"
                  />
                  <div className="mt-3 w-full">
                    <p className="text-sm font-medium text-tblue2">
                      {course.courseName}
                    </p>
                    <div className="mt-1 flex items-center space-x-2">
                      <p className="text-xs font-medium text-tblue2">
                        {course.studentsEnrolled.length} students
                      </p>
                      <p className="text-xs font-medium text-tblue2">
                        |
                      </p>
                      <p className="text-xs font-medium text-tblue2">
                        Rs. {course.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-20 rounded-md bg-richblack-800 p-6 py-20">
          <p className="text-center text-2xl font-bold text-richblack-5">
            You have not created any courses yet
          </p>
          <Link to="/dashboard/add-course">
            <p className="mt-1 text-center text-lg font-semibold text-yellow-50">
              Create a course
            </p>
          </Link>
        </div>
      )}
    </div>
  )
}
