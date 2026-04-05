import Course from "../models/course.model.js";
import ErrorHandler from "../utils/ErrorHandler.js";

// CREATE COURSE
export const createCourse = async (req, res, next) => {
    const course = await Course.create(req.body);
    res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: course,
    });
};

// GET ALL COURSES
export const getAllCourses = async (req, res) => {
    const courses = await Course.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      total: courses.length,
      data: courses,
    });
};

// GET COURSE BY ID
export const getCourseById = async (req, res, next) => {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return next(new ErrorHandler("Course not found", 404));
    }

    res.status(200).json({
      success: true,
      data: course,
    });
};

// UPDATE COURSE
export const updateCourse = async (req, res, next) => {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!course) {
      return next(new ErrorHandler("Course not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "Course updated successfully",
      data: course,
    });
};

// DELETE COURSE
export const deleteCourse = async (req, res, next) => {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return next(new ErrorHandler("Course not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "Course deleted successfully",
    });
};