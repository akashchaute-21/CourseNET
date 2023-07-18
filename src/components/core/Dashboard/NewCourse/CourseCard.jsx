import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../../../slices/cartSlice';
import { useNavigate } from 'react-router-dom';

function CourseCard({course}) {
  const dispatch = useDispatch();
  const {cart} = useSelector((state)=>state.cart)
  const{ user} = useSelector((state)=>state.profile)
 const navigate =useNavigate();
  const handleCourseDetails = (id) => {
    navigate(`/courses/${id}`);
  };
 console.log(user)
  return (
     
    <article key={course._id} className='border border-richblack-900 text-richblack-300 rounded-xl p-7  bg-[#2c2c6c] scroll-smooth hover:bg-transparent ease-in duration-300'>
      <div>
        <img src={course.thumbnail}  className='rounded-lg w-[300px] h-[200px]'/>
      </div>
        <div className='flex flex-col justify-center items-center'>
        <h3 className='font-semibold mt-2 text-xl'>{course.courseName}</h3>
        </div>
       <div className='items-left'>
      <div>Price: {course.price} </div>
       <div>By: {course.instructor.firstname+" "+course.instructor.lastname} </div>
       </div>
        <div className='flex justify-between align-bottom mt-4'>
      
        <button
           // disabled={loading}
            type="button"
           onClick={() => handleCourseDetails(course._id)}
            className="mt-6 rounded-[8px] bg-[#4db5ff] py-[8px] px-[12px] font-medium text-richblack-900 "
          >
            View Course
          </button> 
          {user.courses.includes(course._id)?  <button
           // disabled={loading}
            type="button"
           // onClick={() => }
            className="mt-6 rounded-[8px] bg-[#4db5ff] py-[8px] px-[12px] font-medium text-richblack-900 "
          >
           Go to Course
          </button>
         :(!cart.some((c)=>c._id===course._id)? <button
           // disabled={loading}
            type="button"
            onClick={() => {dispatch(addToCart(course))}}
            className="mt-6 rounded-[8px] bg-[#4db5ff] py-[8px] px-[12px] font-medium text-richblack-900 "
          >
            Add to Cart
          </button>: <button
           // disabled={loading}
            type="button"
            onClick={() => {dispatch(removeFromCart(course))}}
            className="mt-6 rounded-[8px] bg-[#4db5ff] py-[8px] px-[12px] font-medium text-richblack-900 "
          >
            Remove
          </button>  )}
        </div>
      
        </article>
        
        
  )
}

export default CourseCard
