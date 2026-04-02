import React from "react";
import { heroImg, girlImg, heroContent } from "../assets/assets";
import { FaPlay } from "react-icons/fa";


const Hero = () => {
  return (
    <div
      className="h-screen text-white relative bg-no-repeat bg-bottom bg-cover flex px-20"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="flex-1 flex flex-col justify-center gap-10">
        <h1 className="text-5xl font-semibold">
          <span className="text-[#F48C06]">Studying</span> Online is now <br />{" "}
          much easier
        </h1>
        <p>
        <span className="font-semibold">TQ CIVILS</span> is an interesting platform that will teach <br /> you in more an
          interactive way
        </p>
        <div className="flex items-center gap-10">
          <button className="bg-white/20 backdrop-blur-md text-white w-40 py-3 rounded-full border border-white/30 hover:bg-white/30 transition">
            Join for free
          </button>
          <button className="flex items-center gap-5">
            <span className="bg-white p-4 rounded-full text-[#23BDEE]"><FaPlay/></span>
            <p>Watch how it works</p>
            </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center pb-5">
        <img className="absolute h-4/5" src={girlImg} alt="" />
        <img className="absolute w-1/2" src={heroContent} alt="" />
      </div>
      
    </div>
  );
};

export default Hero;
