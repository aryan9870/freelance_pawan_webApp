import React from "react";
import { article_1, article_2, article_3, article_4 } from "../assets/assets";

const articles = [
  {
    image: article_1,
    title: "UPSC Foundation Course 2026",
    price: "₹4999",
  },
  {
    image: article_2,
    title: "UPPCS Complete तैयारी Batch",
    price: "₹3999",
  },
  {
    image: article_3,
    title: "Current Affairs Crash Course",
    price: "₹999",
  },
  {
    image: article_4,
    title: "Polity by Laxmikanth (Detailed)",
    price: "₹1499",
  },
];

const PopularArticals = () => {
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
          {articles.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5"
            >
              {/* Image */}
              <img
                src={item.image}
                alt="article"
                className="w-full h-[200px] object-cover rounded-xl mb-5"
              />

              {/* Tags */}
              <div className="flex justify-between text-xs text-gray-400 mb-5">
                <span>Design</span>
                <span>3 Month</span>
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-xs text-gray-500 mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </p>

              {/* Bottom */}
              <div className="flex justify-between items-center">
                {/* Author */}
                <div className="flex items-center gap-2">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="author"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-xs text-gray-600">Lina</span>
                </div>

                {/* Price */}
                <div className="text-sm font-semibold text-teal-500">
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

export default PopularArticals;