import express from "express";
import { uploadNotes, getAllNotes } from "../controllers/notes.controller.js";
import notesValidationSchema from "../validation/notes.validation.js";
import validate from "../middlewares/validation.middleware.js";
import { isAuthenticated, isAdmin } from "../middlewares/auth.middleware.js";

const router = express.Router();

//  Upload Notes (Admin / Protected)
router.post("/", isAuthenticated, isAdmin, validate(notesValidationSchema), uploadNotes);

// Get All Notes
router.get("/", getAllNotes);

export default router;
