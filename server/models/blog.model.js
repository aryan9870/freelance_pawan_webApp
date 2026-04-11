import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    excerpt: {
      type: String, // card preview (short text)
      required: true,
    },

    content: {
      type: String, // full blog (detail page)
      required: true,
    },

    thumbnail: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: ["UPSC", "UPPCS", "SSC", "Current Affairs", "Strategy"],
      required: true,
    },

    author: {
      type: String,
      default: "Pawan Sir",
    },

    readTime: {
      type: String, // "5 min read"
    },

    views: {
      type: Number,
      default: 0,
    },

    likes: {
      type: Number,
      default: 0,
    },

    tags: [String], // ["polity", "history"]

    isFeatured: {
      type: Boolean, // top blog section
      default: false,
    },

    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;