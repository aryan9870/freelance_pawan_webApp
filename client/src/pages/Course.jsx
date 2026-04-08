import React from "react";
import Navbar_v2 from "../components/Navbar_v2";
import { omr } from "../assets/assets";
import { useParams } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import CoursesGrid from "../components/CoursesGrid";
import useCourseStore from "../store/courseStore";
import { useEffect } from "react";


const Course = () => {
  const { id } = useParams();
  const { getAllCourses, courses } = useCourseStore();

  useEffect(() => {
    getAllCourses();
  }, []);

  const relatedCourses = [...courses]
    .filter((course) => course.category === "TEST_SERIES")
    .slice(0, 4);

  return (
    <div className="text-gray-600">
      <Navbar_v2 />
      <div className="mt-22 flex flex-col">
        <div className="w-full h-[70vh] max-md:hidden">
          <img className="w-full h-full object-cover" src={omr} alt="course" />
        </div>
        <div className="flex mx-20 max-md:mx-5 my-10 gap-20 relative max-md:flex-col">
          <div className="flex-3 px-5 py-5 rounded-2xl bg-[#9DCCFF]/20 max-md:hidden">
            <h1 className="text-2xl font-semibold">Course Overview</h1>
            <div className="flex items-center justify-center h-full">
                <p className="text-lg font-semibold">Under Construction</p>
            </div>
          </div>
          <div className="flex-1 px-5 max-md:px-0 py-5 rounded-2xl relative max-md:-mt-10 md:-mt-64 bg-white max-md:w-full">
            <div className="border-b-2 border-gray-300 pb-5">
              <div className="h-46 w-ful">
                <img className="w-full h-full object-cover" src={omr} alt="course" />
              </div>
              <div className="flex items-center gap-2 justify-between mt-5">
                <p className="text-2xl font-semibold">$49.65</p>
                <p className="font-semibold text-lg text-gray-400 line-through">$99.99</p>
                <p className="font-semibold text-lg text-gray-400">50% off</p>
              </div>
              <button className="w-full bg-teal-500 text-white py-2 rounded-md mt-5">Buy Now</button>
            </div>
            <div className="border-b-2 border-gray-300 py-5">
              <h3 className="text-lg font-semibold">This Course included</h3>
              <div className="flex flex-col gap-2 mt-5 text-sm">
                <div className="flex items-center gap-2">
                  <span><TiTick size={20}/></span>
                  <p>Money Back Guarantee</p>
                </div>
                <div className="flex items-center gap-2">
                  <span><TiTick size={20}/></span>
                  <p>Access on all devices</p>
                </div>
                <div className="flex items-center gap-2">
                  <span><TiTick size={20}/></span>
                  <p>Certification of completion</p>
                </div>
                <div className="flex items-center gap-2">
                  <span><TiTick size={20}/></span>
                  <p>32 Moduls</p>
                </div>
              </div>
            </div>
            <div className="border-b-2 border-gray-300 py-5">
              <h3 className="text-lg font-semibold">
                Training 5 or more people
              </h3>
              <p className="mt-5 text-sm">
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively...
              </p>
            </div>
            <div className="pt-5">
              <h3 className="text-lg font-semibold">Share this course</h3>
              <div className="flex gap-5 mt-5">
                <span className="bg-gray-600 cursor-pointer hover:bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center"><FaTwitter size={12}/></span>
                <span className="bg-gray-600 cursor-pointer hover:bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center"><FaFacebook size={12}/></span>
                <span className="bg-gray-600 cursor-pointer hover:bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center"><FaInstagram size={12}/></span>
                <span className="bg-gray-600 cursor-pointer hover:bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center"><FaTelegram size={12}/></span>
                <span className="bg-gray-600 cursor-pointer hover:bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center"><FaWhatsapp size={12}/></span>
              </div>
            </div>
          </div>
        </div>
        <CoursesGrid cources={relatedCourses} title="Related Courses" bgColor="[#9DCCFF]/20"/>
      </div>
    </div>
  );
};

export default Course;
