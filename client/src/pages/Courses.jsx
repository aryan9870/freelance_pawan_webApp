import React from "react";
import Navbar_v2 from "../components/Navbar_v2";
import CoursesGrid from "../components/CoursesGrid";
import { polity, economy, currentAffairs, classroom, upsc, uppcs } from "../assets/assets";
import CourseCategory from "../components/CourseCategory";

const Courses = () => {
  const courses = [
    {
      title: "UPSC Prelims 2026 Complete Course",
      description:
        "Comprehensive preparation for UPSC Prelims including Polity, History, Geography, Economy, and Current Affairs with MCQs practice.",
      image: polity,
      category: "Prelims Preparation",
      duration: "3 Months",
      author: "Pawan Sir",
      students: "500+",
    },
    {
      title: "GS Mains Answer Writing Program 2026",
      description:
        "Improve your answer writing skills with daily practice questions, model answers, and detailed feedback for GS papers.",
      image: economy,
      category: "Mains Preparation",
      duration: "4 Months",
      author: "Pawan Sir",
      students: "200+",
    },
    {
      title: "Foundation Course for UPSC & UPPCS",
      description:
        "Build strong fundamentals across all subjects with structured classes, notes, and mentorship for beginners.",
      image: currentAffairs,
      category: "Foundation Courses",
      duration: "6 Months",
      author: "Pawan Sir",
      students: "5000+",
    },
    {
      title: "UPSC Prelims Test Series 2026",
      description:
        "Full-length mock tests based on latest exam pattern with detailed performance analysis and All India ranking.",
      image: classroom,
      category: "Test Series",
      duration: "2 Months",
      author: "Pawan Sir",
      students: "300+",
    },
  ];

  return (
    <div className="">
      <Navbar_v2 />
      <div className="mt-22">
        <CoursesGrid
          cources={courses}
          title="Recommended for you"
          bgColor="[#9DCCFF]/20"
        />
      </div>
      <CourseCategory />
      <CoursesGrid
        cources={courses}
        title="Popular Courses"
        bgColor="[#9DCCFF]/20"
      />
      <CoursesGrid cources={courses} title="Latest Additions" />
      <CoursesGrid
        cources={courses}
        title="Test Series"
        bgColor="[#9DCCFF]/20"
      />
    </div>
  );
};

export default Courses;
