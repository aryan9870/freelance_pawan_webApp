import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// pages import
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
