import React from "react";
import { article_1, article_2, article_3, article_4, man } from "../assets/assets";

const articles = [
  {
    author: "Pawan Sir - Founder of TQ Civils",
    image: article_1,
    title: "UPSC Current Affairs 2025 – Complete Monthly Compilation",
    price: "₹299",
  },
  {
    author: "Pawan Sir - Founder of TQ Civils",
    image: article_2,
    title: "Polity PYQs + Concepts Crash Course (Prelims + Mains)",
    price: "₹99",
  },
  {
    author: "Pawan Sir - Founder of TQ Civils",
    image: article_3,
    title: "Economy Simplified for UPSC – Basics to Advanced",
    price: "₹199",
  },
  {
    author: "Pawan Sir - Founder of TQ Civils",
    image: article_4,
    title: "CSAT Complete तैयारी (Maths + Reasoning + Practice)",
    price: "₹299",
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
                <div className="flex items-center gap-2 flex-2 justify-start">
                  <img
                    src={man}
                    alt="author"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-xs text-gray-600">{item.author}</span>
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

export default PopularArticals;