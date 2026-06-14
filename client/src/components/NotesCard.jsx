import React from "react";
import { upsc } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const NotesCard = ({thumbnail, title, price, id}) => {

  const navigate = useNavigate();

  return (
    <div className="bg-neutral-primary-soft w-full p-4 sm:p-5 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
      <a href="#">
        <img
          className="rounded-base mb-3 w-full h-40 sm:h-48 object-cover"
          src={thumbnail}
          alt={title}
        />
      </a>
      <a href="#">
        <h5 className="mb-3 font-semibold tracking-tight text-heading text-sm sm:text-base line-clamp-2">
          {title}
        </h5>
      </a>
      <div className="flex items-center justify-between gap-2">
      <p className="text-sm sm:text-base font-medium">{price}</p>
      <a href="https://learn.terraquestcivils.com/courses" className="bg-teal-500 cursor-pointer text-white rounded-sm py-2 px-3 sm:px-5 text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0">
        Buy Now
      </a>
      </div>
    </div>
  );
};

export default NotesCard;
