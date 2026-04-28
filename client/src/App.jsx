import React from "react";
import { Routes, Route } from "react-router-dom";

// pages import
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Courses from "./pages/Courses";
import Course from "./pages/Course";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import AddBlog from "./pages/AddBlog";
import AddCourse from "./pages/AddCourse";
import ManageBlogs from "./pages/ManageBlogs";
import ManageCourses from "./pages/ManageCourses";
import AddNotes from "./pages/AddNotes";
import Notes from "./pages/Notes";
import CheckOut from "./pages/checkOut";

import { useEffect } from "react";
import useAuthStore from "./store/authStore";

import { Toaster } from "react-hot-toast";

import LoadingSpinner from "./components/LoadingSpinner";

const App = () => {
  const { checkAuth, isCheckingAuth, user } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  if (isCheckingAuth) return <LoadingSpinner />;
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<Course />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout/:type/:id" element={<CheckOut />} />
        {user?.role === "admin" && (
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<AddNotes />} />
            <Route path="add-blog" element={<AddBlog />} />
            <Route path="add-course" element={<AddCourse />} />
            <Route path="add-notes" element={<AddNotes />} />
            <Route path="manage-blogs" element={<ManageBlogs />} />
            <Route path="manage-courses" element={<ManageCourses />} />
            <Route path="*" element={<AddCourse />} />
          </Route>
        )}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
