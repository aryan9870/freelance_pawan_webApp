import { create } from "zustand";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
import toast from "react-hot-toast";

const useNotesStore = create((set) => ({
  notes: [],

  uploadNotes: async (notesData) => {
    try {
      const response = await axios.post(`${API_URL}/notes`, notesData, {
        withCredentials: true,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        console.log(response.data);
        return true;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      return false;
    }
  },

  getAllNotes: async () => {
    try {
      const response = await axios.get(`${API_URL}/notes`, {
        withCredentials: true,
      });
      if (response.data.success) {
        set({ notes: response.data.notes });
        return true;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      return false;
    }
  },
}));

export default useNotesStore;
