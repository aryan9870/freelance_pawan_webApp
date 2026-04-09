import { create } from "zustand";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
import toast from "react-hot-toast";

const useCourseStore = create((set) => ({
  courses: [],
  singleCourse: null,

  // GET ALL COURSES
  getAllCourses: async () => {
    try {
      const res = await axios.get(`${API_URL}/courses`);
      if(res.data.success){
        console.log(res.data);
        set({
          courses: res.data.data,
        });
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
    }
  },

  // GET SINGLE COURSE
  getSingleCourse: async (id) => {
    try {
      const res = await axios.get(`${API_URL}/courses/${id}`);
      if(res.data.success){
        console.log(res.data);
        set({
          singleCourse: res.data.data,
        });
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
    }
  },
}));

export default useCourseStore;
