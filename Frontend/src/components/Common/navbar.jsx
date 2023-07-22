import { useEffect, useState } from "react"
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import { useSelector } from "react-redux"
import { Link, matchPath, useLocation } from "react-router-dom"

import logo from "../../assets/Logo/logo_courseNET2.png"
import { NavbarLinks } from "../../data/navbar-links"
import { apiConnector } from "../../services/apiConnector"
import { categories } from "../../services/apis"
import { ACCOUNT_TYPE } from "../../utils/constants"
import ProfileDropdown from "../core/Auth/ProfileDropDown"


function Navbar() {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const { totalItems } = useSelector((state) => state.cart)
  const location = useLocation()

  const [subLinks, setSubLinks] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API)
        setSubLinks(res.data.data)
      } catch (error) {
        console.log("Could not fetch Categories.", error)
      }
      setLoading(false)
    })()
  }, [])

  // console.log("sub links", subLinks)

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <div
      className={`flex h-14 items-center z-10 justify-center transition-all duration-200 bg-darkyellow shadow-md shadow-pure-greys-200`}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" width={125} height={65} loading="lazy" className="rounded-lg"/>
        </Link>
        {/* Navigation links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-10 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-tblue2 font-semibold border-b-[3px] border-b-richblack-700"
                          : "text-tblue2 font-semibold"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Login / Signup / Dashboard */}
        <div className="hidden items-center gap-x-4 md:flex">
          {user && user?.accounttype !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-tblue2" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className={`rounded-[8px] font-semibold border-2 border-tblue2 px-[25px] py-[8px]  hover:bg-tblue2 hover:text-tyellow3 transition-all duration-200  ${location.pathname == "/login" ? " text-tyellow3 bg-tblue2" : "text-tblue2 bg-tyellow3"}`}>
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className={`rounded-[8px] font-semibold border-2 border-tblue2 px-[25px] py-[8px]  hover:bg-tblue2 hover:text-tyellow3 transition-all duration-200 ${location.pathname == "/signup" ? " text-tyellow3 bg-tblue2" : "text-tblue2 bg-tyellow3"}`}>
                Sign up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropdown />}
        </div>
        <button className="mr-4 md:hidden">
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button>
      </div>
    </div>
  )
}

export default Navbar
