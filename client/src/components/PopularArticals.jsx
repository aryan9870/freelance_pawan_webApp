import React from "react";
import {
  article_1,
  article_2,
  article_3,
  article_4,
  man,
} from "../assets/assets";
import useBlogStore from "../store/blogStore";
import { useNavigate } from "react-router-dom";

const PopularArticals = () => {
  const { blogs } = useBlogStore();
  const navigate = useNavigate();

  const popularBlogs = [...blogs]
    .sort((a, b) => b.views - a.views) // high → low
    .slice(0, 4); // top 4

  console.log(popularBlogs);

  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Top */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-semibold">Popular Articals</h2>
          <span className="text-teal-500 text-sm cursor-pointer">See all</span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularBlogs &&
            popularBlogs?.length > 0 &&
            popularBlogs
              .map((item, index) => (
                <div
                  onClick={() => {
                    navigate(`/blog/${item._id}`);
                    window.scrollTo(0, 0);
                  }}
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5"
                >
                  {/* Image */}
                  <img
                    src={item.thumbnail}
                    alt="article"
                    className="w-full h-[200px] object-cover rounded-xl mb-5"
                  />

                  {/* Tags */}
                  <div className="flex justify-between text-xs text-gray-400 mb-5">
                    <span>{item.category}</span>
                    <span>{item.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-xs text-gray-500 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
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
                      <span className="text-xs text-gray-600">
                        Pawan
                      </span>
                    </div>
                    {/* Price */}
                    <div className="text-sm font-semibold text-teal-500 flex-1 flex justify-end">
                      {item.price}
                    </div>
                  </div>
                </div>
              ))
              .slice(0, 4)}
        </div>
      </div>
    </section>
  );
};

export default PopularArticals;
