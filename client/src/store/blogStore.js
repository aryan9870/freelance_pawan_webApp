import { create } from "zustand";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
import toast from "react-hot-toast";

const useBlogStore = create((set) => ({
  blogs: [],
  blog: null,

  // GET ALL BLOGS
  getAllBlogs: async () => {
    try {
      const res = await axios.get(`${API_URL}/blogs`);
      if(res.data.success){
        console.log(res.data);
        set({
          blogs: res.data.data,
        });
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
    }
  },

  // GET BLOG BY ID
  getBlogById: async (id) => {
    try {
      const res = await axios.get(`${API_URL}/blogs/${id}`);
      if(res.data.success){
        console.log(res.data);
        set({
          blog: res.data.data,
        });
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
    }
  },
}));

export default useBlogStore;
