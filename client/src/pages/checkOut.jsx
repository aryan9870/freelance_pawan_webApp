import React from "react";
import OrderSummary from "../components/OrderSummary";
import CheckOutForm from "../components/CheckOutForm";
import Navbar_v2 from "../components/Navbar_v2";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import useCourseStore from "../store/courseStore";
import useNotesStore from "../store/notesStore";

const checkOut = () => {
  const { type, id } = useParams();

  console.log(type);
  console.log(id);
  const { getSingleCourse, singleCourse } = useCourseStore();
  const { getSingleNote, singleNote } = useNotesStore();

  useEffect(() => {
    if (type === "course") {
      getSingleCourse(id);
    } else {
      getSingleNote(id);
    }
  }, []);

  console.log(singleCourse);
  console.log(singleNote);

  return (
    <div className="text-gray-600">
      <Navbar_v2 />
      <div className="flex lg:mx-20 sm:mx-10 mx-5  gap-10 mt-22 md:flex-row flex-col">
        <div className="flex-5">
          <CheckOutForm />
        </div>
        <div className="flex-4">
          <OrderSummary item={type === "course" ? singleCourse : singleNote} type={type} />
        </div>
      </div>
      <div className="flex justify-center items-center my-10">
        <p className="text-sm text-gray-600">
          After successful payment, this item will be available in your "My
          Assets" section.
        </p>
      </div>
    </div>
  );
};

export default checkOut;
