import Notes from "../models/notes.model.js";
import ErrorHandler from "../utils/errorHandler.js";
import { uploadToCloudinary } from "../config/cloudinary.js";

export const uploadNotes = async (req, res, next) => {
  const { title, description, price, subject, category, isFree } = req.body;

  // PDF check
  if (!req.files?.file) {
    return next(new ErrorHandler("PDF file is required", 400));
  }

  // Thumbnail check
  if (!req.files?.thumbnail) {
    return next(new ErrorHandler("Thumbnail is required", 400));
  }

  console.log(req.files);

  // PDF upload
  const pdfResult = await uploadToCloudinary(req.files.file[0].buffer, "notes");

  // Thumbnail upload
  const thumbnailResult = await uploadToCloudinary(
    req.files.thumbnail[0].buffer,
    "notes/thumbnails",
  );

  // save in DB
  const notes = await Notes.create({
    title,
    description,
    price,
    subject,
    category,
    isFree,
    fileUrl: pdfResult.secure_url,
    thumbnail: thumbnailResult.secure_url,
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
