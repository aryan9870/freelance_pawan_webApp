import { create } from "zustand";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
import toast from "react-hot-toast";

const useAuthStore = create((set) => ({
  user: null,
  isCheckingAuth: true,

  // REGISTER
  register: async (data) => {
    try {
      const res = await axios.post(`${API_URL}/users/register`, data, {
        withCredentials: true,
      });
      if(res.data.success){
        console.log(res.data);
        set({
          user: res.data.user,
        });
        toast.success(res.data.message);
        return true;
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
      return false;
    }
  },

  // LOGIN
  login: async (data) => {
    try {
      const res = await axios.post(`${API_URL}/users/login`, data, {
        withCredentials: true,
      });
      if(res.data.success){
        console.log(res.data);
        set({
          user: res.data.user,
        });
        toast.success(res.data.message);
        return true;
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
      return false;
    }
  },

  // LOGOUT
  logout: async () => {
    try {
      const res = await axios.post(`${API_URL}/users/logout`, {}, {
        withCredentials: true,
      });
      if(res.data.success){
        console.log(res.data);
        set({ user: null });
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  checkAuth: async () => {
    set({ isCheckingAuth: true });
    try {
      const res = await axios.get(`${API_URL}/users/me`, {
        withCredentials: true,
      });
      if(res.data.success){
        console.log(res.data);
        set({
          user: res.data.user,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      set({ isCheckingAuth: false });
    }
  },
}));

export default useAuthStore;