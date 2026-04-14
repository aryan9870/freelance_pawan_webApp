import React from 'react'
import { IoCartOutline } from "react-icons/io5";

const BookCard = ({ image, title, price }) => {
  return (
    <div className="bg-white relative rounded-xl shadow-md overflow-hidden w-[260px] hover:shadow-xl transition duration-300 text-gray-600">
      <button className="absolute top-5 right-5 bg-teal-500 text-white rounded-sm p-2 text-sm font-semibold">
        Buy Now
      </button>
      {/* Image */}
      <div className="p-3">
        <img
          src={image}
          alt="note"
          className="rounded-lg w-full h-[300px] object-cover"
        />
      </div>

      {/* Content */}
      <div className="px-4 pb-4 flex justify-between items-center">
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-green-500 font-semibold">{price}</p>
      </div>
    </div>
  );
};

export default BookCard;