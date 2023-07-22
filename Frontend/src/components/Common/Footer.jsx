import React from "react";

import { Link } from "react-router-dom";

// Images
import IMAGE from "../../assets/Logo/logo_courseNET2_white.png"; 

// Icons
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-tblue2 text-pure-greys-25 justify-center">

    <div className= "flex flex-col w-11/12 max-w-maxContent text-richblack-100 mx-auto py-14 gap-7">
      <div className="flex flex-row">

          <div className="flex flex-col w-[25%]">
              <img src= {IMAGE} alt="logo here" className="w-[70%] translate-x-5 -translate-y-5"/>
                Discover, create, and share courses on courseNET – where knowledge meets opportunity. Join our vibrant community to connect, collaborate, and thrive in seamless course transactions. Together, let's redefine education.
              </div>
          <div className="flex flex-col w-[25%] items-center ">
            <div className="flex flex-col">
            <div className="flex font-semibold text-twhite text-xl mb-3">Quick Links</div>
                <li className="cursor-pointer">Find degree</li>
                <li className="cursor-pointer">Find New Career</li>
                <li className="cursor-pointer">Blog</li>
                <li className="cursor-pointer">Contact</li>
            </div>
          </div>
          <div className="flex flex-col w-[25%] items-center ">
          <div className="flex flex-col ">
          <div className="flex font-semibold text-twhite text-xl mb-3">Subjects</div>
                <li className="cursor-pointer">Computer Science</li>
                <li className="cursor-pointer">Data Science</li>
                <li className="cursor-pointer">Web Design</li>
                <li className="cursor-pointer">Web Development</li>
            </div>
          </div>
          <div className="flex flex-col w-[25%] items-center ">
          <div className="flex flex-col">
          <div className="flex font-semibold text-twhite text-xl mb-3">Career building</div>
                <li className="cursor-pointer">Career paths</li>
                <li className="cursor-pointer">Beta Content</li>
                <li className="cursor-pointer">Full Catalog</li>
                <li className="cursor-pointer">Exposure</li>
            </div>
          </div>
      </div>

      <div className="flex flex-row justify-between ">
      <div className="flex text-white">
            © 2023 courseNET. All rights reserved.
        </div>
        <div className="flex gap-5 text-2xl cursor-pointer text-white">
        <FaFacebook/>
        <FaGoogle/>
        <FaTwitter/>
        <FaYoutube/>
        </div>
        </div>
    </div>
  </div>
  );
};

export default Footer;
