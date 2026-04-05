import { Router } from "express";
import { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog } from "../controllers/blog.controller.js";
import validate from "../middlewares/validation.middleware.js";
import { blogValidation } from "../validation/blog.validation.js";

const router = Router();

router.post("/", validate(blogValidation), createBlog);
router.get("/", getAllBlogs);
router.get("/:id", getBlogById);
router.put("/:id", validate(blogValidation), updateBlog);
router.delete("/:id", deleteBlog);

export default router;
