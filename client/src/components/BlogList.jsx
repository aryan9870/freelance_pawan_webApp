import React from 'react'
import useBlogStore from "../store/blogStore";


const BlogList = () => {

  const { blogs } = useBlogStore();

  const resentBlogs = [...blogs]
  .sort((a, b) => b.createdAt - a.createdAt) // 🔥 high → low
  .slice(0, 4); // top 4




  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-10">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl font-semibold mb-6">Reading blog list</h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resentBlogs.map((blog, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden group cursor-pointer"
              >
                {/* Image */}
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="w-full h-[200px] object-cover group-hover:scale-105 transition duration-300"
                />

                {/* Overlay */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur min-w-44 text-center px-6 py-2 rounded-lg text-sm font-medium shadow">
                  {blog.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default BlogList