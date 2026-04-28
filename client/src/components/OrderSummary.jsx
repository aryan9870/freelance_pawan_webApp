import React from "react";
import { book_1 } from "../assets/assets";

const OrderSummary = ({ item , type}) => {
  const subtotal = 70;
  const discount = 0;
  const tax = 5;
  const total = subtotal - discount + tax;

  return (
    <div className="w-full bg-[#9DCCFF]/30 rounded-2xl shadow-md p-6">
      {/* Title */}
      <h2 className="text-lg mb-5">Summary</h2>

      {/* Item */}
        <div className="flex items-center gap-5 border-b pb-5">
          <img
            src={item?.thumbnail}
            alt="course"
            className="w-20 h-20 rounded-md object-cover"
          />
          <div className="flex-1 flex flex-col gap-2">
            <p className="text-sm font-medium">{item?.title}</p>
            <p className="text-gray-500 text-xs">{item?.description}</p>
          </div>
          <p className="text-sm font-semibold">${item?.price}</p>
        </div>

      {/* Price Details */}
      <div className="mt-5 flex flex-col gap-5 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Subtotal</span>
          <span>${type === "course" ? item?.discountPrice : item?.price}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Discount</span>
          <span>{type === "course" ? ((item?.price - item?.discountPrice)/item?.price * 100).toFixed(2) : 0}%</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Tax</span>
          <span>18%</span>
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between mt-5 pt-5 border-t font-semibold text-lg">
        <span>Total</span>
        <span>₹ {type === "course" ? (item?.discountPrice * 1.18).toFixed(2) : (item?.price * 1.18).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
