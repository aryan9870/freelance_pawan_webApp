import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoIosList } from "react-icons/io";
import Navbar_v2 from "../components/Navbar_v2";

const Dashboard = () => {
  return (
    <>
      <Navbar_v2 />
      <div className="mt-22 flex text-gray-600 text-sm max-md:text-xs">
        <div className="border-r border-gray-200 flex-1">
          <ul className="flex flex-col gap-3 py-5 pl-5 h-[calc(100vh-100px)]">
            <NavLink
              to="/dashboard/add-course"
              className={({ isActive }) =>
                isActive
                  ? "p-2 cursor-pointer flex gap-2 items-center border border-gray-200 bg-gray-200"
                  : "p-2 cursor-pointer flex gap-2 items-center border border-gray-200"
              }
            >
              <IoAddCircleOutline size={22} />
              <span className="max-md:hidden">Add Course</span>
            </NavLink>
            <NavLink
              to="/dashboard/add-blog"
              className={({ isActive }) =>
                isActive
                  ? "p-2 cursor-pointer flex gap-2 items-center border border-gray-200 bg-gray-200"
                  : "p-2 cursor-pointer flex gap-2 items-center border border-gray-200"
              }
            >
              <IoAddCircleOutline size={22} />
              <span className="max-md:hidden">Add Blog</span>
            </NavLink>
            <NavLink
              to="/dashboard/add-notes"
              className={({ isActive }) =>
                isActive
                  ? "p-2 cursor-pointer flex gap-2 items-center border border-gray-200 bg-gray-200"
                  : "p-2 cursor-pointer flex gap-2 items-center border border-gray-200"
              }
            >
              <IoAddCircleOutline size={22} />
              <span className="max-md:hidden">Add Notes</span>
            </NavLink>
            <NavLink
              to="/dashboard/manage-courses"
              className={({ isActive }) =>
                isActive
                  ? "p-2 cursor-pointer flex gap-2 items-center border border-gray-200 bg-gray-200"
                  : "p-2 cursor-pointer flex gap-2 items-center border border-gray-200"
              }
            >
              <IoIosList size={22} />
              <span className="max-md:hidden">Manage Course</span>
            </NavLink>
            <NavLink
              to="/dashboard/manage-blogs"
              className={({ isActive }) =>
                isActive
                  ? "p-2 cursor-pointer flex gap-2 items-center border border-gray-200 bg-gray-200"
                  : "p-2 cursor-pointer flex gap-2 items-center border border-gray-200"
              }
            >
              <IoIosList size={22} />
              <span className="max-md:hidden">Manage Blog</span>
            </NavLink>
          </ul>
        </div>
        <div className="flex-6 md:p-5 p-2 max-md:w-[75%]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
