import React from "react";
import { heroImg, boy, heroContent } from "../assets/assets";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      className="h-screen text-white relative bg-no-repeat bg-bottom bg-cover sm:flex lg:px-20 sm:px-10 px-2 gap-10 max-sm:pt-20"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="flex-1 flex flex-col justify-center gap-10 max-sm:h-1/2">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold">
          <span className="text-[#F48C06]">UPSC & UPPCS</span> Preparation{" "}
          <br /> Made Simple
        </h1>
        <p>
          Expert guidance, structured courses, and daily practice for UPSC &
          UPPCS aspirants — all in one place.
        </p>
        <div className="flex items-center gap-10 max-sm:gap-5 max-sm:flex-col max-sm:items-start">
          <button className="bg-white/20 backdrop-blur-md text-white w-40 py-3 rounded-full border-white/30 hover:bg-white/30 transition">
            Join free demo
          </button>
          <button className="flex items-center gap-5 max-sm:gap-2">
            <span className="bg-white p-4 rounded-full text-[#23BDEE]">
              <FaPlay />
            </span>
            <p>Watch how it works</p>
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center pb-5 max-sm:h-1/2">
        <img className="absolute lg:h-4/5 md:h-3/5 h-2/5" src={boy} alt="" />
        <img className="absolute lg:h-1/2 md:h-1/3 h-1/4" src={heroContent} alt="" />
      </div>
    </div>
  );
};

export default Hero;
