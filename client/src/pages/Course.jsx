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
import { useNavigate } from "react-router-dom";

const Course = () => {
  const { id } = useParams();
  const { getSingleCourse, getAllCourses, courses, singleCourse } =
    useCourseStore();
  console.log(singleCourse);

  const navigate = useNavigate();

  useEffect(() => {
    getSingleCourse(id);
    getAllCourses();
  }, [id]);

  const relatedCourses = [...courses]
    .filter(
      (course) =>
        course.category === singleCourse?.category && course._id !== id,
    )
    .slice(0, 4);

  return (
    <div className="text-gray-600">
      <Navbar_v2 />
      <div className="mt-22 flex flex-col">
        <div className="w-full h-[80vh] max-md:hidden">
          <img
            className="w-full h-full object-fill"
            src={singleCourse?.thumbnail}
            alt="course"
          />
        </div>
        <div className="flex mx-20 max-md:mx-5 my-10 gap-20 relative max-md:flex-col">
          <div className="flex-3 px-5 py-5 max-md:hidden flex flex-col gap-5">
            <h1 className="font-semibold text-lg w-fit px-5 py-1.5 rounded-lg bg-gray-200">
              Overview
            </h1>
            <div className="bg-[#9DCCFF]/20 h-full rounded-2xl p-5">
              <h1 className="text-lg font-semibold">{singleCourse?.title}</h1>
              <h2 className="text-sm font-semibold text-gray-400">{singleCourse?.subtitle}</h2>
              <p className="mt-5 text-sm">{singleCourse?.description}</p>
              <div className="flex flex-col gap-2 mt-5 text-sm">
                <h3 className="font-semibold">Course Includes</h3>
                <div className="flex flex-col gap-2 mt-2 text-sm">
                  {singleCourse?.whatYouWillLearn.map((item, index) => (
                    <div className="flex items-center gap-2">
                      <span>
                        <TiTick size={20} />
                      </span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-5 text-sm">
                <h3 className="font-semibold">Requirements</h3>
                <div className="flex flex-col gap-2 mt-2 text-sm">
                  {singleCourse?.requirements.map((item, index) => (
                    <div className="flex items-center gap-2">
                      <span>
                        <TiTick size={20} />
                      </span>
                      <p>{item}</p>
                    </div>
                  )).slice(0, 4)}
                  {singleCourse?.requirements.length > 4 && (
                    <div className="flex items-center gap-2">
                      <span>
                        <TiTick size={20} />
                      </span>
                      <p className="">more ...</p>
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex flex-col gap-2 mt-5 text-sm">
                    <span className="font-semibold text-lg">Instructor : Pawan Sir</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 px-5 max-md:px-0 py-5 rounded-2xl relative max-md:-mt-10 md:-mt-64 bg-white max-md:w-full">
            <div className="border-b-2 border-gray-300 pb-5">
              <div className="h-46 w-ful">
                <img
                  className="w-full h-full object-cover"
                  src={singleCourse?.thumbnail}
                  alt="course"
                />
              </div>
              <div className="flex items-center gap-2 justify-between mt-5">
                <p className="text-2xl font-semibold">
                  {singleCourse?.discountPrice}
                </p>
                <p className="font-semibold text-lg text-gray-400 line-through">
                  {singleCourse?.price}
                </p>
                <p className="font-semibold text-lg text-gray-400">
                  {(
                    (singleCourse?.price - singleCourse?.discountPrice) /
                    singleCourse?.price
                  ).toFixed(2) * 100}
                  % off
                </p>
              </div>
              <button onClick={() => {navigate(`/checkout/course/${singleCourse._id}`); window.scrollTo(0, 0)}} className="w-full bg-teal-500 cursor-pointer text-white py-2 rounded-md mt-5">
                Buy Now
              </button>
            </div>
            <div className="border-b-2 border-gray-300 py-5">
              <h3 className="text-lg font-semibold">Course Summary</h3>
              <p className="mt-5 text-sm">{singleCourse?.description}</p>
            </div>
            <div className="border-b-2 border-gray-300 py-5">
              <h3 className="text-lg font-semibold">This Course included</h3>
              <div className="flex flex-col gap-2 mt-5 text-sm">
                {singleCourse?.whatYouWillLearn.map((item, index) => (
                  <div className="flex items-center gap-2">
                    <span>
                      <TiTick size={20} />
                    </span>
                    <p>{item}</p>
                  </div>
                )).slice(0, 4)}
                {singleCourse?.whatYouWillLearn.length > 4 && (
                  <div className="flex items-center gap-2">
                    <span>
                      <TiTick size={20} />
                    </span>
                    <p className="">more ...</p>
                  </div>
                )}
              </div>
            </div>
            <div className="border-b-2 border-gray-300 py-5">
              <h3 className="text-lg font-semibold">Requirements</h3>
              <div className="flex flex-col gap-2 mt-5 text-sm">
                {singleCourse?.requirements.map((item, index) => (
                  <div className="flex items-center gap-2">
                    <span>
                      <TiTick size={20} />
                    </span>
                    <p>{item}</p>
                  </div>
                )).slice(0, 4)}
              </div>
            </div>
            <div className="pt-5">
              <h3 className="text-lg font-semibold">Share this course</h3>
              <div className="flex gap-5 mt-5">
                <span className="bg-gray-600 cursor-pointer hover:bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center">
                  <FaTwitter size={12} />
                </span>
                <span className="bg-gray-600 cursor-pointer hover:bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center">
                  <FaFacebook size={12} />
                </span>
                <span className="bg-gray-600 cursor-pointer hover:bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center">
                  <FaInstagram size={12} />
                </span>
                <span className="bg-gray-600 cursor-pointer hover:bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center">
                  <FaTelegram size={12} />
                </span>
                <span className="bg-gray-600 cursor-pointer hover:bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center">
                  <FaWhatsapp size={12} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <CoursesGrid
          cources={relatedCourses}
          title="Related Courses"
          bgColor="[#9DCCFF]/20"
        />
      </div>
    </div>
  );
};

export default Course;
