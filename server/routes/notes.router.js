import express from "express";
import { uploadNotes, getAllNotes, getNoteById } from "../controllers/notes.controller.js";
import notesValidationSchema from "../validation/notes.validation.js";
import validate from "../middlewares/validation.middleware.js";
import { isAuthenticated, isAdmin } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";

const router = express.Router();

//  Upload Notes (Admin / Protected)
router.post(
  "/",
  isAuthenticated,
  isAdmin,
  validate(notesValidationSchema),
  upload.fields([
    { name: "file", maxCount: 1 },
    { name: "thumbnail", maxCount: 1 },
  ]),
  uploadNotes,
);

// Get All Notes
router.get("/", getAllNotes);

// Get note by id
router.get("/:id", getNoteById);

export default router;
