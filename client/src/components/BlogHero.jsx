import React from 'react'
import { blogMain } from '../assets/assets'

const BlogHero = () => {
  return (
    <section className="w-full bg-[#9DCCFF]/20 mt-22 px-6 md:px-12 lg:px-20 max-sm:pb-10">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* LEFT CONTENT */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-gray-600 mb-5">
              By <span className="font-semibold">Themadbrains</span> in{" "}
              <span className="text-teal-500 font-medium">inspiration</span>
            </p>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1e2a5a] leading-tight mb-5">
              Why Current Affairs is the Backbone of UPSC & UPPCS Preparation
            </h1>

            <p className="text-gray-500 mb-5 max-w-xl">
              Stay ahead in your UPSC & UPPCS journey with daily updated current affairs, expert analysis, and exam-focused content curated by TQ Civils.
            </p>

            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md font-semibold transition">
              Start learning now
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1">
            <img
              src={blogMain}
              alt="blog"
              className="w-full h-[300px] my-10 md:h-[350px] object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>
  )
}

export default BlogHero