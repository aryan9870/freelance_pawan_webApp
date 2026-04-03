import React from "react";
import { Link } from "react-router-dom";

const Navbar_v2 = () => {
  return (
    <nav
      className={`flex justify-between items-center px-20 py-6 bg-white z-10 text-black absolute top-0 w-full font-semibold max-sm:px-2`}
    >
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
        <div className="flex gap-5 items-center max-sm:gap-2">
          <Link to="/login">
            <button className="py-2 w-28 max-sm:w-20 max-sm:py-1 bg-black text-white rounded-full">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button
              className={`backdrop-blur-md bg-black/10 text-black w-28 max-sm:w-20 py-2 max-sm:py-1 rounded-full transition hover:bg-black/20`}
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar_v2;
