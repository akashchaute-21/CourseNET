import { FiTrash2 } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { deleteProfile } from "../../../../services/operations/SettingsAPI"

export default function DeleteAccount() {
  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function handleDeleteAccount() {
    try {
      dispatch(deleteProfile(token, navigate))
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }

  return (
    <>
      <div className="my-10 flex flex-row gap-x-5 rounded-xl border-2  bg-[#FF0000] bg-opacity-60 border-pink-700 p-8 px-12">
        <div onClick={handleDeleteAccount} className="flex  cursor-pointer aspect-square h-14 w-14 items-center justify-center rounded-full bg-pink-700">
          <FiTrash2 className="text-3xl text-pink-200" />
        </div>
        <div  onClick={handleDeleteAccount} className="flex  cursor-pointer flex-col space-y-2">
          <h2 className="text-xl font-extrabold text-tblue2">
          DELETE ACCOUNT
          </h2>
          <div className=" text-tblue2 text-lg">
            <p> All the data will be lost.</p>
          </div>
        
        </div>
      </div>
    </>
  )
}
