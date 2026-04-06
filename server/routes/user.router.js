import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  checkAuth,
} from "../controllers/user.controller.js";
import validate from "../middlewares/validation.middleware.js";
import { registerValidation, loginValidation } from "../validation/user.validation.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", validate(registerValidation), registerUser);
router.post("/login", validate(loginValidation), loginUser);
router.post("/logout", logoutUser);
router.get("/me", isAuthenticated, checkAuth);

export default router;