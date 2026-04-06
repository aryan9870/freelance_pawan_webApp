import React from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar_v2 = () => {
  const { user, logout } = useAuthStore();
  const [open, setOpen] = useState(false);
  const [openNavs, setOpenNavs] = useState(false);

  return (
    <nav
      className={`flex justify-between items-center px-20 py-6 bg-white z-10 text-gray-600 absolute top-0 w-full font-semibold max-sm:px-2`}
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
        {user ? (
          <div className="group relative">
            <span
              className="text-2xl cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <FaRegUserCircle />
            </span>
            {open && (
              <div className="absolute top-10 right-0 bg-white/80 text-gray-600 backdrop-blur-lg px-5 py-2 rounded-md shadow-lg">
                <button onClick={logout} className="cursor-pointer">Logout</button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">
            <button className="bg-black text-white sm:w-28 w-20 sm:py-2 py-1 rounded-full ">
              Login
            </button>
          </Link>
        )}
      </div>
      <div
        className={`absolute top-0 left-0 w-full p-5 bg-white/10 backdrop-blur-lg text-black z-20 flex-col items-center justify-center gap-6 ${!openNavs && "hidden"}`}
      >
        <button
          onClick={() => setOpenNavs(false)}
          className="absolute top-5 right-5 text-xl"
        >
          ✕
        </button>
        <ul className="flex flex-col text-lg mt-10">
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-white/20 p-3 rounded-sm" : "p-3 rounded-sm"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-white/20 p-3 rounded-sm" : "p-3 rounded-sm"
            }
            to="/courses"
          >
            Courses
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-white/20 p-3 rounded-sm" : "p-3 rounded-sm"
            }
            to="/blog"
          >
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-white/20 p-3 rounded-sm" : "p-3 rounded-sm"
            }
            to="/about"
          >
            About Us
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar_v2;
