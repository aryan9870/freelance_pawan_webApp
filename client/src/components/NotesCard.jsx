import React from "react";
import { upsc } from "../assets/assets";

const NotesCard = ({thumbnail, title, price}) => {
  return (
    <div class="bg-neutral-primary-soft block max-w-sm p-5  rounded-base shadow-md hover:shadow-xl rounded-2xl">
      <a href="#">
        <img className="rounded-base mb-3" src={thumbnail} alt="" />
      </a>
      <a href="#">
        <h5 class="mb-3 font-semibold tracking-tight text-heading">
          {title}
        </h5>
      </a>
      <div className="flex items-center justify-between">
      <p className="">{price}</p>
      <button className="bg-teal-500 text-white rounded-sm py-2 px-5 text-sm font-semibold">
        Buy Now
      </button>
      </div>
    </div>
  );
};

export default NotesCard;
