import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    subtitle: {
      type: String, // short tagline
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    discountPrice: {
      type: Number, // $49.65 type jo figma me hai
    },

    thumbnail: {
      type: String,
      required: true,
    },

    category: {
      type: String, // UPSC / UPPCS / SSC etc
      required: true,
    },

    instructor: {
      name: String,
      avatar: String,
    },

    rating: {
      type: Number,
      default: 0,
    },

    totalReviews: {
      type: Number,
      default: 0,
    },

    totalStudents: {
      type: Number,
      default: 0,
    },

    duration: {
      type: String, // "10h 30min"
    },

    lectures: [
      {
        title: String,
        videoUrl: String,
        duration: String,
      },
    ],

    whatYouWillLearn: [String], // figma me "This course includes"

    requirements: [String],

    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
