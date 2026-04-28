import React from "react";
import { upsc } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const NotesCard = ({thumbnail, title, price, id}) => {

  const navigate = useNavigate();

  return (
    <div className="bg-neutral-primary-soft block max-w-sm p-5  rounded-base shadow-md hover:shadow-xl rounded-2xl">
      <a href="#">
        <img className="rounded-base mb-3" src={thumbnail} alt="" />
      </a>
      <a href="#">
        <h5 className="mb-3 font-semibold tracking-tight text-heading">
          {title}
        </h5>
      </a>
      <div className="flex items-center justify-between">
      <p className="">{price}</p>
      <button onClick={() => {navigate("/checkout/notes/" + id); window.scrollTo(0, 0)}} className="bg-teal-500 cursor-pointer text-white rounded-sm py-2 px-5 text-sm font-semibold">
        Buy Now
      </button>
      </div>
    </div>
  );
};

export default NotesCard;
