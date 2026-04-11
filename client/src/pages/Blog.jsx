import React from "react";
import Navbar_v2 from "../components/Navbar_v2";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useBlogStore from "../store/blogStore";
import { admin } from "../assets/assets";
import RelatedBlog from "../components/RelatedBlog";

const Blog = () => {
  const { id } = useParams();
  const { getBlogById, blog } = useBlogStore();

  useEffect(() => {
    getBlogById(id);
  }, [id]);

  console.log(blog);

  return (
    <div className="text-gray-600">
      <Navbar_v2 />
      <div className="mt-22 h-[70vh] w-full">
        <img className="h-full w-full object-cover" src={blog?.thumbnail} alt="" />
      </div>
      <div className="lg:mx-20 sm-10 mx-5  flex flex-col gap-5">
        <h1 className="text-2xl font-semibold mt-5">
          {blog?.title}
        </h1>
        <div className="flex flex-col gap-5">
          <p className="">
            TOTC is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
          <p>
            TOTC is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place. TOTC is a platform
            that allows educators to create online classes whereby they can
            store the course materials online; manage assignments, quizzes and
            exams; monitor due dates; grade results and provide students with
            feedback all in one place. TOTC is a platform{" "}
          </p>
          <p>
            TOTC is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place. TOTC is a platform
            that allows educators to create online classes whereby they can
            store the course materials online; manage{" "}
          </p>
        </div>
        <div className="flex gap-10">
          {blog?.tags?.map((tag, index) => (
            <div key={index} className="bg-[#49BBBD]/20 h-10 rounded-full w-fit flex items-center justify-center px-5">
              {tag}
            </div>
          )).slice(0, 4)}
        </div>
        <div className="flex justify-between items-center border-t-2 py-5 border-gray-300">
          <div className="flex gap-5 items-center">
            <img src={admin} alt="author" className="w-10 h-10 rounded-sm" />
            <div className="text-sm">
              <p className="text-gray-400">Written by</p>
              <p className="font-semibold">{blog?.author || "Pawan Sir"}</p>
            </div>
          </div>
          <p>Published on <span className="text-[#49BBBD]">{blog?.createdAt?.slice(0, 10) || "11 April 2026"}</span></p>
        </div>
      </div>
      <RelatedBlog />
    </div>
  );
};

export default Blog;
