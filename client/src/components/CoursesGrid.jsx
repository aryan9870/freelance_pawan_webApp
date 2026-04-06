import React from "react";
import { man } from "../assets/assets";

const CoursesGrid = ({cources, title, bgColor="white"}) => {

  return (
    <section className={`w-full px-6 md:px-12 lg:px-20 py-10 bg-${bgColor}`}>
      <div className="max-w-7xl mx-auto">
        {/* Top */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <span className="text-teal-500 text-sm cursor-pointer">See all</span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cources.map((item, index) => (
            <div
              key={index}
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
                    src={man}
                    alt="author"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-xs text-gray-600">Pawan Sir</span>
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
