import React from "react";
import { FooterLink2 } from "../../data/footer-links";
import { Link } from "react-router-dom";

// Images


// Icons
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-tblue2 text-pure-greys-100 justify-center">

    <div className= "flex flex-col w-11/12 max-w-maxContent text-richblack-400 mx-auto py-14">
      <div className="flex flex-row">

          <div className="flex flex-col w-[25%]">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum corporis necessitatibus sunt. Odio distinctio, aperiam molestias libero corrupti nulla assumenda doloremque, fugiat placeat ducimus quis. Quia facilis omnis ea praesentium.
          </div>
          <div className="flex flex-col w-25%">
                Quick Links
                <li>Find degree</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
          </div>
      </div>

      <div className="flex flex-row justify-between ">
        <div className="flex">
            © 2023 courseNET. All rights reserved.
        </div>
        <div className="flex">
            icons here
        </div>
        </div>
    </div>
  </div>
  );
};

export default Footer;
