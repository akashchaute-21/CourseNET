import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-semibold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] ${
          active ? "bg-tblue2 text-tyellow1 " : " font-bold bg-tyellow3 border-2 border-tblue2 text-tblue2 "
        } hover:shadow-none hover:scale-95 transition-all duration-200 `}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
