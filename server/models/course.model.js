import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {    // done
      type: String,
      required: true,
      trim: true,
    },

    subtitle: {   // done
      type: String, // short tagline
    },

    description: {
      type: String,
      required: true,
    },

    price: {  // done
      type: Number,
      required: true,
    },

    discountPrice: {  // done
      type: Number, // $49.65 type jo figma me hai
    },

    thumbnail: { // done
      type: String,
      required: true,
    },

    category: { // done
      type: String, // UPSC / UPPCS / SSC etc
      required: true,
    },

    instructor: {
      type: String,
      default: "Admin",
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

    duration: { // done
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

    isFeatured: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
