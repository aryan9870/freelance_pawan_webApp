import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ bgColor="transparent", textColor="white" }) => {
    
  return (
    <nav className={`flex justify-between items-center px-20 py-6 bg-${bgColor} absolute top-0 z-10 w-full text-${textColor} font-semibold`}>
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
        <div className="flex gap-5">
          <Link to="/login">
            <button className="bg-white text-gray-600 w-28 py-2 rounded-full ">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className={`bg-white/20 backdrop-blur-md text-white w-28 py-2 rounded-full border border-white/30 hover:bg-white/30 transition`}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
