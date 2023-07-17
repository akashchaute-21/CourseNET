import React from 'react'

function CourseCard({course}) {
  return (

    <article key={course._id} className='border border-richblack-900 text-richblack-300 rounded-xl p-7  bg-[#2c2c6c] scroll-smooth hover:bg-transparent ease-in duration-300'>
      <div>
        <img src={course.thumbnail}  className='rounded-lg w-[300px] h-[200px]'/>
      </div>
        <div className='flex flex-col justify-center items-center'>
        <h3 className='font-semibold mt-2 text-xl'>{course.coursename}</h3>
        </div>
   <div>By:{course.instructor.firstname+" "+course.instructor.lastname} </div>
        <div className='flex justify-between align-bottom mt-4'>
        <button
           // disabled={loading}
            type="button"
          //  onClick={goBack}
            className="mt-6 rounded-[8px] bg-[#4db5ff] py-[8px] px-[12px] font-medium text-richblack-900 "
          >
            View Course
          </button>        <a  className='mt-6 rounded-[8px] bg-[#4db5ff] py-[8px] px-[12px] font-medium text-richblack-900 ' target="__blank">View Course</a>
        </div>
      
        </article>
        
        
  )
}

export default CourseCard
