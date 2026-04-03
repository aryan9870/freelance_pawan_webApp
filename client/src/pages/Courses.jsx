import React from "react";
import Navbar_v2 from "../components/Navbar_v2";
import CoursesGrid from "../components/CoursesGrid";
import { trading, blogMain } from "../assets/assets";
import CourseCategory from "../components/CourseCategory";

const Courses = () => {

  const courses = [
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

  return (
    <div className="">
      <Navbar_v2 />
      <div className="mt-22">
        <CoursesGrid cources={courses} title="Recommended for you" bgColor="[#9DCCFF]/20"/>
      </div>
      <CourseCategory />
      <CoursesGrid cources={courses} title="Popular Courses" bgColor="[#9DCCFF]/20"/>
      <CoursesGrid cources={courses} title="Latest Additions"/>
      <CoursesGrid cources={courses} title="Test Series" bgColor="[#9DCCFF]/20"/>
    </div>
  );
};

export default Courses;
