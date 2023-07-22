import ChangeProfilePicture from "./ChangeProfilePicture"
import DeleteAccount from "./DeleteAccount"
import EditProfile from "./EditProfile"
import UpdatePassword from "./UpdatePassword"

export default function Settings() {
  return (
    <>   
      <h1 className="mb-1 text-4xl font-semibold text-tblue2">
        Settings
      </h1>
      <div className="h-[2px] my-8 w-[1000px] bg-tblue2"></div>

      <ChangeProfilePicture />
     
      <EditProfile />
    
      <UpdatePassword />
     
      <DeleteAccount />
    </>
  )
}
