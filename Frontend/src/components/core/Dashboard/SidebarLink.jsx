import * as Icons from "react-icons/vsc"
import { useDispatch } from "react-redux"
import { NavLink, matchPath, useLocation } from "react-router-dom"

import { resetCourseState } from "../../../slices/courseSlice"

export default function SidebarLink({ link, iconName }) {
  const Icon = Icons[iconName]
  const location = useLocation() 
  const dispatch = useDispatch()

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <NavLink 
      to={link.path}
      onClick={() => dispatch(resetCourseState())}
      className={`relative px-8 py-2 mx-1.5 rounded-lg text-lg font-bold ${
        matchRoute(link.path)
          ? "bg-tblue2 text-tyellow1"
          : "text-tblue2"
      } transition-all duration-200`}
    >
      {/* <span
        className={`absolute left-0 top-0 h-full w-[0.15rem] bg-yellow-50 ${
          matchRoute(link.path) ? "opacity-100" : "opacity-0"
        }`}
      ></span> */}
      <div className="flex items-center gap-x-2">
        {/* Icon Goes Here */}
        <Icon className="text-xl" />
        <span>{link.name}</span>
      </div>
    </NavLink>
  )
}
