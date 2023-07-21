import { FaStar } from "react-icons/fa"
import { RiDeleteBin6Line } from "react-icons/ri"
import ReactStars from "react-rating-stars-component"
import { useDispatch, useSelector } from "react-redux"

import { removeFromCart } from "../../../../slices/cartSlice"

export default function RenderCartCourses() {
  const { cart } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
 
  return (
    <div className="flex flex-1  flex-col">
      {cart.map((course, indx) => (
        <div
          key={course._id}
          className="flex w-full   space-x-5 items-center m-2 p-2 border-2 border-tblue2 rounded-lg ">
            <img
              src={course?.thumbnail}
              alt={course?.courseName}
              className="h-[150px] w-[220px] rounded-lg object-cover"
            />
            <div className="flex w-full flex-col space-y-[-6px] ">

              <p className="text-2xl font-bold text-tblue2">
                {course?.courseName}
              </p>
              <div className="h-4"/>
             <div className="flex text-md  items-center  gap-x-1"> 
              <p className="font-bold text-tblue2 text-lg">Category:</p>
              <p className="text-md font-medium text-tblue2 ">
                {course?.category?.name}
              </p>
              </div> 

              <div className="flex text-md  items-center  gap-x-2"> 
              <p className="font-bold text-tblue2 text-lg">By:</p>
              <p className="text-md font-medium text-tblue2 mt-1">
                {course?.instructor?.firstname+" "+course?.instructor?.lastname}
              </p>
              </div> 

              <div className="flex text-md  items-center  gap-x-2"> 
              <p className="font-bold text-tblue2 text-lg">Price:</p>
              <p className="text-lg font-bold text-tblue2 mt-1">
              ₹ {course?.price}
              </p>
              </div> 
            </div>

          <div className="flex -translate-y-12 translate-x-3 items-end h-full w-full ">
            <button
              onClick={()=>{dispatch(removeFromCart(course))}}
              className="flex items-center  gap-x-1 rounded-md bg-tblue2 py-3 px-[12px] text-tyellow2"
            >
              <RiDeleteBin6Line />
              <span>Remove from Cart</span>
            </button>
            </div>
        </div>
      ))}
    </div>
  )
}
