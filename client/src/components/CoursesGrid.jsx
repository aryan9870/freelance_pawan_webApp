import React from "react";
import { admin } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const CoursesGrid = ({ cources, title, bgColor = "white" }) => {
  const [courcesToShow, setCourcesToShow] = useState(cources.slice(0, 4));
  const navigate = useNavigate();

  const handleSeeAll = () => {
    if (courcesToShow.length === cources.length) {
      setCourcesToShow(cources.slice(0, 4));
    } else {
      setCourcesToShow(cources.slice(0, 12));
    }
  };

  useEffect(() => {
    setCourcesToShow(cources.slice(0, 4));
  }, [cources]);

  if (cources.length === 0) {
    return null;
  }

  return (
    <section className={`w-full px-6 md:px-12 lg:px-20 py-10 bg-${bgColor}`}>
      <div className="max-w-7xl mx-auto">
        {/* Top */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <span
            onClick={handleSeeAll}
            className="text-teal-500 text-sm cursor-pointer"
          >
            {courcesToShow.length === cources.length ? "See less" : "See all"}
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courcesToShow.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(`/course/${item._id}`);
                window.scrollTo(0, 0);
              }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5"
            >
              {/* Image */}
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-[200px] object-cover rounded-xl mb-5"
              />

              {/* Tags */}
              <div className="flex justify-between text-xs text-gray-400 mb-5">
                <span>{item.category}</span>
                <span>{item.duration}</span>
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-xs text-gray-500 mb-3">
                {item.description.slice(0, 50)}...
              </p>

              {/* Bottom */}
              <div className="flex justify-between items-center">
                {/* Author */}
                <div className="flex items-center gap-2 flex-2 justify-start">
                  <img
                    src={admin}
                    alt="author"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-xs text-gray-600">
                    Pawan Sir
                  </span>
                </div>

                {/* Price */}
                <div className="text-sm font-semibold text-teal-500 flex-1 flex justify-end">
                  {item.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesGrid;
