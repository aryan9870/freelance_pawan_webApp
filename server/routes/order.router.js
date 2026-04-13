import express from "express";
import { createOrder, getMyOrders, getAllOrders } from "../controllers/order.controller.js";
import { isAuthenticated, isAdmin, isUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", isAuthenticated, isUser, createOrder);
router.get("/my-orders", isAuthenticated, isUser, getMyOrders);
router.get("/all-orders", isAuthenticated, isAdmin, getAllOrders);

export default router;