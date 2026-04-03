import React from "react";
import { blogMain, trading } from "../assets/assets";

const blogs = [
  {
    title: "How to Prepare Current Affairs for UPSC 2026 Effectively",
    description: "Learn the right strategy to cover current affairs for UPSC & UPPCS with monthly revision, note-making techniques, and PYQ analysis.",
    image: trading,
    author: "Lina",
    views: "25,232",
  },
  {
    title: "Top 10 Mistakes Aspirants Make in GS Preparation",
    description: "Discover the most common mistakes that UPSC & UPPCS aspirants make in GS preparation and learn how to avoid them to improve your chances of success.",
    image: blogMain,
    author: "Lina",
    views: "25,232",
  },
];

const RelatedBlog = () => {
  return (
    <section className="w-full bg-[#9DCCFF]/20 px-6 md:px-12 lg:px-20 py-10">
      <div className="max-w-7xl mx-auto">

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-semibold">Related Blog</h2>
          <span className="text-teal-500 text-sm cursor-pointer">See all</span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition"
            >
              {/* Image */}
              <img
                src={blog.image}
                alt="blog"
                className="w-full h-[400px] max-sm:h-[250px] object-cover rounded-xl mb-5"
              />

              {/* Title */}
              <h3 className="text-sm font-semibold text-gray-800 mb-5">
                {blog.title}
              </h3>

              {/* Author */}
              <div className="flex items-center gap-3 mb-5">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="author"
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-sm text-gray-600">{blog.author}</span>
              </div>

              {/* Description */}
              <p className="text-xs text-gray-500 mb-5">
                {blog.description}
              </p>

              {/* Footer */}
              <div className="flex justify-between items-center text-sm">
                <span className="text-teal-500 cursor-pointer">
                  Read more
                </span>
                <span className="text-gray-400">
                  👁 {blog.views}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Buttons (optional like figma) */}
        <div className="flex justify-end gap-2 mt-10">
          <button className="w-10 h-10 flex items-center justify-center bg-[#49BBBD]/50 rounded">
            {"<"}
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-[#49BBBD] text-white rounded">
            {">"}
          </button>
        </div>

      </div>
    </section>
  );
};

export default RelatedBlog;