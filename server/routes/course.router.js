import { Router } from "express";
import { createCourse, getAllCourses, getCourseById, updateCourse, deleteCourse } from "../controllers/course.controller.js";
import validate from "../middlewares/validation.middleware.js";
import { courseValidation } from "../validation/course.validation.js";
import upload from "../middlewares/multer.middleware.js";

const router = Router();

router.post("/", upload.single("thumbnail"), validate(courseValidation), createCourse);
router.get("/", getAllCourses);
router.get("/:id", getCourseById);
router.put("/:id", validate(courseValidation), updateCourse);
router.delete("/:id", deleteCourse);

export default router;  