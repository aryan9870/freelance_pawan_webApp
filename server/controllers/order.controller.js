import Order from "../models/order.model.js";
import ErrorHandler from "../utils/errorHandler.js";
import Course from "../models/course.model.js";
import Notes from "../models/notes.model.js";

// create order 
export const createOrder = async (req, res, next) => {
    const { notesId } = req.body;
    const user = req.user;

    // Check note exists
    const note = await Notes.findById(notesId);
    if (!note) {
      return next(new ErrorHandler("Note not found", 404));
    }

    // Prevent free note purchase
    if (note.isFree) {
      return next(new ErrorHandler("This note is free", 400));
    }

    // Save in DB
    const order = await Order.create({
      user: req.user._id,
      note: note._id,
      amount: note.price,
      status: "completed",
    });

    res.status(201).json({
        success: true,
        message: "Order created successfully",
        order,
    });
};