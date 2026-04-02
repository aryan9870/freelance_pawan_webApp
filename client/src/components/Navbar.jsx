import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ bgColor="transparent", textColor="white" }) => {
    
  return (
    <nav className={`flex justify-between items-center lg:px-20 md:px-10 px-2 py-6 bg-${bgColor} absolute top-0 z-10 w-full text-${textColor} font-semibold`}>
      {/* Logo */}
      <Link to="/">
        <h2 className="text-2xl font-semibold">TQ CIVILS</h2>
      </Link>

      <div className="flex gap-20 items-center">
        {/* Nav Links */}
        <ul className="flex gap-20 max-lg:hidden">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>

        {/* Buttons  */}
        <div className="flex sm:gap-5 gap-2">
          <Link to="/login">
            <button className="bg-white text-gray-600 sm:w-28 w-20 sm:py-2 py-1 rounded-full ">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className={`bg-white/20 backdrop-blur-md text-white sm:w-28 w-20 sm:py-2 py-1 rounded-full border border-white/30 hover:bg-white/30 transition`}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
