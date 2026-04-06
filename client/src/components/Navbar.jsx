import React from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { FaRegUserCircle } from "react-icons/fa";


const Navbar = ({ bgColor = "transparent", textColor = "white" }) => {
  const { user } = useAuthStore();
  const [openNavs, setOpenNavs] = useState(false);

  return (
    <nav
      className={`flex justify-between items-center lg:px-20 md:px-10 px-2 py-6 bg-${bgColor} absolute top-0 z-10 w-full text-${textColor} font-semibold`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span onClick={() => setOpenNavs(!openNavs)} className="lg:hidden">
          <FaBarsStaggered className="text-2xl" />
        </span>
        <Link to="/">
          <h2 className="text-2xl font-semibold">TQ CIVILS</h2>
        </Link>
      </div>

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
          {user ? <span className="text-2xl"><FaRegUserCircle /></span> : <Link to="/login">
            <button className="bg-white text-gray-600 sm:w-28 w-20 sm:py-2 py-1 rounded-full ">
              Login
            </button>
          </Link>}
      </div>
      <div
        className={`absolute top-0 left-0 w-full p-5 bg-black/10 backdrop-blur-lg text-white z-20 flex-col items-center justify-center gap-6 ${!openNavs && "hidden"}`}
      >
        <button
          onClick={() => setOpenNavs(false)}
          className="absolute top-5 right-5 text-xl"
        >
          ✕
        </button>
        <ul className="flex flex-col text-lg mt-10">
          <NavLink className={({isActive}) => isActive ? "bg-white/20 p-3 rounded-sm" : "p-3 rounded-sm"} to="/" >Home</NavLink>
          <NavLink className={({isActive}) => isActive ? "bg-white/20 p-3 rounded-sm" : "p-3 rounded-sm"} to="/courses">Courses</NavLink>
          <NavLink className={({isActive}) => isActive ? "bg-white/20 p-3 rounded-sm" : "p-3 rounded-sm"} to="/blog">Blog</NavLink>
          <NavLink className={({isActive}) => isActive ? "bg-white/20 p-3 rounded-sm" : "p-3 rounded-sm"} to="/about">About Us</NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
