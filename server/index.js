import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.router.js";
import ErrorHandler from "./utils/ErrorHandler.js";
import courseRouter from "./routes/course.router.js";
import blogRouter from "./routes/blog.router.js";

dotenv.config();
connectDB();

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: [process.env.CLIENT_URL, "http://localhost:5173"],
  credentials: true,
}));

app.get("/", (req, res) => {
  res.send("API running...");
});

app.use("/api/users", userRouter);
app.use("/api/courses", courseRouter);
app.use("/api/blogs", blogRouter);

// Route not found
app.use((req, res, next) => {
  return next(new ErrorHandler(`Route ${req.originalUrl} not found`, 404));
});

// Error handler middleware
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message,
  });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});