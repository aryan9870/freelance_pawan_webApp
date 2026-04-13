import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  price: {
    type: Number,
    required: true,
  },

  subject: {
    type: String, // Geography, History, Science
  },

  category: {
    type: String, // optional future use
  },

  fileUrl: {
    type: String,
    required: true,
  },

  thumbnail: {
    type: String, // preview image
  },

  isFree: {
    type: Boolean,
    default: false,
  },

}, { timestamps: true });

const Notes = mongoose.model("Notes", notesSchema);

export default Notes;