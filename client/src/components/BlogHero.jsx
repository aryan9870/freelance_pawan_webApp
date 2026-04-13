import React from "react";
import { useNavigate } from "react-router-dom";

const BlogHero = ({ blog }) => {
  console.log(blog);
  const navigate = useNavigate();
  return (
    <section className="w-full bg-[#9DCCFF]/20 mt-22 px-6 md:px-12 lg:px-20 max-sm:pb-10">
      {blog && (
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* LEFT CONTENT */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-gray-600 mb-5">
              By <span className="font-semibold">Pawan</span> in{" "}
              <span className="text-teal-500 font-medium">{blog.category}</span>
            </p>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1e2a5a] leading-tight mb-5">
              {blog.title}
            </h1>

            <p className="text-gray-500 mb-5 max-w-xl">{blog.description}</p>

            <button
              onClick={() => {
                navigate(`/blog/${blog._id}`);
                window.scrollTo(0, 0);
              }}
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md font-semibold transition"
            >
              Read More
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1">
            <img
              src={blog.thumbnail}
              alt="blog"
              className="w-full h-[300px] my-10 md:h-[350px] object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogHero;
