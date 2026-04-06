import React from "react";
import Navbar_v2 from "../components/Navbar_v2";
import CoursesGrid from "../components/CoursesGrid";
import {
  polity,
  economy,
  currentAffairs,
  classroom,
  upsc,
  uppcs,
} from "../assets/assets";
import CourseCategory from "../components/CourseCategory";
import useCourseStore from "../store/courseStore";
import { useEffect } from "react";

const Courses = () => {
  const { getAllCourses, courses } = useCourseStore();

  const latestCourses = [...courses]
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, 4);

  const popularCourses = [...courses]
    .sort((a, b) => b.totalStudents - a.totalStudents)
    .slice(0, 4);

  const testSeries = [...courses]
    .filter((course) => course.category === "TEST_SERIES")
    .slice(0, 4);

  useEffect(() => {
    getAllCourses();
  }, []);

  console.log(popularCourses);

  return (
    <div className="">
      <Navbar_v2 />
      <div className="mt-22">
        <CoursesGrid
          cources={popularCourses}
          title="Popular Courses"
          bgColor="[#9DCCFF]/20"
        />
      </div>
      <CourseCategory />
      <CoursesGrid cources={latestCourses} title="Recent Additions" />
      <CoursesGrid
        cources={testSeries}
        title="Test Series"
        bgColor="[#9DCCFF]/20"
      />
    </div>
  );
};

export default Courses;
