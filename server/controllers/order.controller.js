import Order from "../models/order.model.js";
import ErrorHandler from "../utils/temp.js";
import Course from "../models/course.model.js";
import Notes from "../models/notes.model.js";
import razorpay from "../config/razorpay.js";
import crypto from "crypto";

// create order
export const createOrder = async (req, res, next) => {
  const { amount, course, notes } = req.body;

  const options = {
    amount: amount * 100,
    currency: "INR",
    receipt: "receipt_" + Date.now(),
  };

  const razorpayOrder = await razorpay.orders.create(options);

  const order = await Order.create({
    user: req.user._id,
    course,
    notes,
    amount,
    paymentId: razorpayOrder.id,
    status: "pending",
  });

  res.status(201).json({
    success: true,
    message: "Order created successfully",
    order,
    razorpayOrder,
  });
};

export const verifyPayment = async (req, res) => {
  console.log(req.body);
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    await Order.findOneAndUpdate(
      { paymentId: razorpay_order_id },
      { status: "completed" },
    );
    res.status(200).json({
      success: true,
      message: "Payment verified successfully",
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Payment verification failed",
    });
  }
};

// get all orders
export const getAllOrders = async (req, res, next) => {
  const orders = await Order.find();
  res.status(200).json({
    success: true,
    orders,
  });
};
