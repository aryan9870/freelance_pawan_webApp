import React from "react";
import Navbar_v2 from "../components/Navbar_v2";
import RelatedBlog from "../components/RelatedBlog";
import PopularArticals from "../components/PopularArticals";
import BlogHero from "../components/BlogHero";
import BlogList from "../components/BlogList";
import useBlogStore from "../store/blogStore";
import { useEffect } from "react";

const Blog = () => {

  const { getAllBlogs, blogs } = useBlogStore();

  useEffect(() => {
    getAllBlogs();
  }, []);

  const latestBlog = blogs[0];
  return (
    <>
      <Navbar_v2 />
      <BlogHero blog={latestBlog} />
      <BlogList />
      <RelatedBlog />
      <PopularArticals />
    </>
  );
};

export default Blog;
