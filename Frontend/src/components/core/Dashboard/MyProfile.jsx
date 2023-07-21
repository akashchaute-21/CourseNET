import { RiEditBoxLine } from "react-icons/ri"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { formattedDate } from "../../../utils/dateFormatter"
import IconBtn from "../../Common/IconBtn"

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()

  return (
    <>
      {/* <h1 className="mb-14 text-3xl font-large text-tblue2">
        Profile
      </h1> */}
      
      <div className=" rounded-lg border-2 border-richblack-700 bg-darkyellow space-y-5 p-8 px-12">
      <div className="flex flex-row items-start justify-between ">
        <div className="flex items-center gap-x-4">
       
        <img
            src={user?.image}
            alt={`name here`}
            className="aspect-square w-[150px] rounded-full object-cover"
          />
      
          <div className="space-y-1">
            <p className="text-3xl font-semibold text-tblue2">
              {user?.firstname + " " + user?.lastname}
            </p>
            <p className="text-lg text-richblack-300">{user?.email}</p>
         <div className="flex items-end gap-x-1">
          <h2 className="text-tblue2 text-xl font-bold">Profile: </h2>
         <p className="text-lg text-tblue2">  { user?.accounttype}</p>
          </div>   
          </div>
        </div >
        <IconBtn 
          text="Edit Profile"
          onclick={() => {
            navigate("/dashboard/settings")
          }}
        >
          <RiEditBoxLine />
        </IconBtn>
      </div>
      <div className="h-[1px] w-[900px] self-center  bg-black"></div>
        <div className="flex-col w-full items-center justify-between">
          <p className="text-2xl font-bold text-tblue2 ml-4 py-2">About</p>
        <p
          className={`${
            user?.aditionaldetails?.about
              ? "text-richblack-5"
              : "text-richblack-400"
          } text-lg font-medium ml-4`}
        >
         {user?.aditionaldetails?.about ? user?.aditionaldetails?.about: "Write Something About Yourself"}
        </p>
      </div>
      </div>
     
      <div className="my-10 flex flex-col gap-y-10 rounded-lg border-2 border-richblack-700 bg-darkyellow p-8 px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-2xl font-bold text-tblue2 ml-4">
            Personal Details
          </p>
        </div>
        <div className="flex max-w-[500px] justify-between ml-4">
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-xl text-tblue2">First Name</p>
              <p className="text-lg font-medium text-tblue2">
                {user?.firstname}
              </p>
            </div>
            <div>
              <p className="mb-2 text-xl text-tblue2">Email</p>
              <p className="text-lg font-medium text-tblue2">
                {user?.email}
              </p>
            </div>
            <div>
              <p className="mb-2 text-xl text-tblue2">Gender</p>
              <p className="text-lg font-medium text-tblue2">
                {user?.aditionaldetails?.gender ?? "Add Gender"}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-xl text-tblue2">Last Name</p>
              <p className="text-lg font-medium text-tblue2">
                {user?.lastname}
              </p>
            </div>
            <div>
              <p className="mb-2 text-xl text-tblue2">Phone Number</p>
              <p className="text-lg font-medium text-tblue2">
                {user?.aditionaldetails?.contactnumber ?? "Add Contact Number"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-xl font-medium text-tblue2">Date Of Birth</p>
              <p className="text-lg font-medium text-tblue2">
                {user?.aditionaldetails?.dob ??
                  "Add Date Of Birth"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
