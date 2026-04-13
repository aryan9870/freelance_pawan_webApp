import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },

  notes: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Notes",
  },

  amount: {
    type: Number,
    required: true,
  },

  paymentId: {
    type: String,
  },

  status: {
    type: String,
    default: "completed",
  },

}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);

export default Order;