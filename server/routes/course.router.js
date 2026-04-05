import { Router } from "express";
import { createCourse, getAllCourses, getCourseById, updateCourse, deleteCourse } from "../controllers/course.controller.js";
import validate from "../middlewares/validation.middleware.js";
import { courseValidation } from "../validation/course.validation.js";

const router = Router();

router.post("/", validate(courseValidation), createCourse);
router.get("/", getAllCourses);
router.get("/:id", getCourseById);
router.put("/:id", validate(courseValidation), updateCourse);
router.delete("/:id", deleteCourse);

export default router;  