import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { BuyCourse } from "../../../../services/operations/studentFeaturesAPI"
import IconBtn from "../../../Common/IconBtn"

export default function RenderTotalAmount() {
  const { total, cart } = useSelector((state) => state.cart)
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()
  const dispatch = useDispatch()  

  const  handleBuyCourse = () => { 
   // console.log("this is running",user)
    const courses = cart.map((course) => course._id)
    
    BuyCourse(token, courses, user, navigate, dispatch,total)
  }

  return (
    <div className="min-w-[280px] rounded-md border-[1px] border-tblue2  p-6">
 <div >
      {cart.map((course)=>{
        return (
         <div className="grid grid-cols-[3.5fr,1fr]">
              <p className="font-bold text-tblue2 text-lg ">{course?.courseName}</p>
            <p className=" text-md text-align-last font-medium  text-tblue2  ">
               {course?.price}
              </p>  
            </div> 
        )
      })}
      </div>
      <div className="h-[1px] my-4 w-[250px] bg-tblue2"></div>
      <div className="grid my-2 grid-cols-[2.5fr,1fr]">
              <p className="font-bold text-tblue2 text-2xl ">Total:</p>
            <p className=" text-md  font-bold  text-tblue2  ">
            ₹ {total}
              </p>  
            </div> 
    
      <IconBtn
        text="Buy Now"
        onclick={()=>{handleBuyCourse()}}
        customClasses="w-full justify-center"
      />
    </div>
  )
}
