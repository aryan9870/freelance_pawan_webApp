import Blog from "../models/blog.model.js";

// CREATE BLOG
export const createBlog = async (req, res) => {
    const blog = await Blog.create(req.body);

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: blog,
    });
};

// GET ALL BLOGS
export const getAllBlogs = async (req, res) => {
    const blogs = await Blog.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      total: blogs.length,
      data: blogs,
    });
};

// GET BLOG BY ID
export const getBlogById = async (req, res) => {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    // views increase (optional 🔥)
    blog.views += 1;
    await blog.save();

    res.status(200).json({
      success: true,
      data: blog,
    });
};

// UPDATE BLOG
export const updateBlog = async (req, res) => {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      data: blog,
    });
};

// DELETE BLOG
export const deleteBlog = async (req, res) => {
    const blog = await Blog.findByIdAndDelete(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
};