import React from "react";
import { oneonone, quiz } from "../assets/assets";

const Features = () => {
  return (
    <div className="mx-20">
      <div className="my-10">
        <h2 className="text-center text-2xl font-semibold">
          Our <span className="text-[#00CBB8]">Features</span>
        </h2>
        <p className="text-center">
          This very extraordinary feature, can make learning activities more
          efficient{" "}
        </p>
      </div>
      <div>
        {/* Feature 1  */}
        <div className="flex justify-center items-center gap-10">
          <div className="flex-1">
            <img src={oneonone} className="w-full" alt="" />
          </div>
          <div className="flex-1 flex flex-col justify-center items-end">
            <div className="w-4/5 gap-5 flex flex-col">
              <h3 className="text-2xl font-semibold w-full">
                One-on-One <br />{" "}
                <span className="text-[#00CBB8]">Discussions</span>
              </h3>
              <p className="text-gray-600 w-full">
                Teachers and teacher assistants can talk with students privately
                without leaving the Zoom environment.
              </p>
            </div>
          </div>
        </div>
        {/* Feature 2  */}
        <div className="flex justify-center items-center gap-10">
          <div className="flex-1 flex flex-col justify-center items-start">
            <div className="w-4/5 gap-5 flex flex-col">
              <h3 className="text-2xl font-semibold w-full">
                Assessments, Quizzes, Tests <br />{" "}
                <span className="text-[#00CBB8]">Discussions</span>
              </h3>
              <p className="text-gray-600 w-full">
                Easily launch live assignments, quizzes, and tests. Student
                results are automatically entered in the online gradebook.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <img src={quiz} className="w-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
