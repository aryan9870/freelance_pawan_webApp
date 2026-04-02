import React from "react";
import { upsc, uppcs, classroom } from "../assets/assets";

const Intro = () => {
  return (
    <div className="py-10 px-6 bg-white">
      {/* Container */}
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl font-semibold">
          What is <span className="text-[#00CBB8]">TQ CIVILS?</span>
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
          TQ CIVILS is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-15 mt-10 px-10">
          {/* UPSC */}
          <div className="relative rounded-xl overflow-hidden group">
            <img
              src={upsc}
              alt="instructors"
              className="w-full h-[250px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center text-white">
              <h3 className="text-lg font-semibold">UPSC</h3>
              <button className="mt-4 border border-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition font-semibold">
                Explore Courses
              </button>
            </div>
          </div>

          {/* UPPCS */}
          <div className="relative rounded-xl overflow-hidden group">
            <img
              src={uppcs}
              alt="students"
              className="w-full h-[250px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center text-white">
              <h3 className="text-lg font-semibold">UPPCS</h3>
              <button className="mt-4 bg-[#00CBB8] px-5 py-2 rounded-full text-sm hover:opacity-90 transition font-semibold">
                Explore Courses
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-10 mx-20 mt-20">
        <div className="flex-1 flex flex-col justify-center items-start">
          <div className="w-4/5 gap-5 flex flex-col">
            <h3 className="text-2xl font-semibold w-full">
              Everything you can do in a physical classroom, <span className="text-[#00CBB8]">you can do with TQ CIVILS</span>
            </h3>
            <p className="text-gray-600 w-full">
              TQ CIVILS’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.
            </p>
            <button className="underline text-sm w-fit">
              Learn more
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img src={classroom} className="w-full h-[300px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
