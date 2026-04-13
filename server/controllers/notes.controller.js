import Notes from "../models/notes.model.js";
import ErrorHandler from "../utils/errorHandler.js";

export const uploadNotes = async (req, res, next) => {
    const { title, description, price, subject, category, isFree } = req.body;

    // save in DB
    const notes = await Notes.create({
      title,
      description,
      price,
      subject,
      category,
      isFree,
      fileUrl: "aryan_nandini_notes",
      thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1lcnxlbnwwfHwwfHx8MA%3D%3D",
    });

    res.status(201).json({
      success: true,
      message: "Notes uploaded successfully",
      notes,
    });
};

export const getAllNotes = async (req, res, next) => {
    const notes = await Notes.find();
    res.status(200).json({
        success: true,
        notes,
    });
};