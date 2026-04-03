import React from 'react'
import { currentAffairs, omr, polity, economy } from "../assets/assets";


const BlogList = () => {

    const blogs = [
    {
      title: "Current Affairs",
      image: currentAffairs,
    },
    {
      title: "GS Paper 1",
      image: omr,
    },
    {
      title: "Polity",
      image: polity,
    },
    {
      title: "Economy",
      image: economy,
    },
  ];


  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-10">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl font-semibold mb-6">Reading blog list</h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden group cursor-pointer"
              >
                {/* Image */}
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[200px] object-cover group-hover:scale-105 transition duration-300"
                />

                {/* Overlay */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur min-w-44 text-center px-6 py-2 rounded-lg text-sm font-medium shadow">
                  {blog.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default BlogList