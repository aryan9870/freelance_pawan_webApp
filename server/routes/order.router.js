import express from "express";
import { createOrder, getAllOrders, verifyPayment } from "../controllers/order.controller.js";
import { isAuthenticated, isAdmin, isUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", isAuthenticated, isUser, createOrder);
router.post("/verify-payment", verifyPayment);
router.get("/all-orders", isAuthenticated, isAdmin, getAllOrders);

export default router;