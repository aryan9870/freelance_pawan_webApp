import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/user.controller.js";
import validate from "../middlewares/validation.middleware.js";
import { registerValidation, loginValidation } from "../validation/user.validation.js";

const router = Router();

router.post("/register", validate(registerValidation), registerUser);
router.post("/login", validate(loginValidation), loginUser);
router.post("/logout", logoutUser);

export default router;