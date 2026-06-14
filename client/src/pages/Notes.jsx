import React from "react";
import Navbar_v2 from "../components/Navbar_v2";
import { notesRectangle, ellipse, admin, uppcs } from "../assets/assets";
import BookCard from "../components/BookCard";
import { book_1, book_2, book_3, book_4 } from "../assets/assets";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import NotesCard from "../components/NotesCard";
import useNotesStore from "../store/notesStore";
import { useEffect } from "react";

const Notes = () => {
  const [selected, setSelected] = useState("notes");
  const { getAllNotes, notes } = useNotesStore();
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllNotes();
  }, []);

  useEffect(() => {
    const data = notes.filter((note) => note.category === selected);
    setData(data);
    console.log(data);
  }, [selected]);

  return (
    <>
      <Navbar_v2 />
      <div className="mt-22 lg:mx-20 md:mx-10 sm:mx-5 mx-3 text-gray-600">
        <div
          className="flex flex-col md:flex-row md:h-[50vh] min-h-[320px] border rounded-lg p-3 sm:p-5 gap-4 md:gap-0"
          style={{
            backgroundImage: `url(${notesRectangle})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full md:w-1/4 p-2 flex justify-center md:block shrink-0">
            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-full md:h-full md:max-h-none bg-white rounded-full p-1">
              <img
                className="w-full h-full rounded-full object-cover"
                src={admin}
                alt="Pawan Sir"
              />
            </div>
          </div>
          <div className="w-full md:w-3/4 border rounded-2xl bg-white/80 p-4 sm:p-6 md:p-10 flex flex-col gap-3 sm:gap-5 justify-center">
            <h1 className="text-xl sm:text-2xl font-semibold">Pawan Sir</h1>
            <p className="text-sm sm:text-base">
              Assistant Professor at Mcmaster University
            </p>
            <p className="text-sm sm:text-base text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enum
              ad minim veniam, quis nostrud
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-6 md:gap-10 items-center text-xs sm:text-sm md:text-base">
                <span>4.9 instructor Rating</span>
                <span>1,592 Students</span>
                <span>Courses</span>
              </div>
              <div className="flex gap-4 sm:gap-5 items-center">
                <FaInstagram className="text-lg sm:text-xl text-teal-600" />
                <FaInstagram className="text-lg sm:text-xl text-teal-600" />
                <FaInstagram className="text-lg sm:text-xl text-teal-600" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-4 py-6 sm:py-10">
          {/* PYQs */}
          <label className="cursor-pointer">
            <input
              type="radio"
              name="category"
              value="pyqs"
              checked={selected === "pyqs"}
              onChange={(e) => setSelected(e.target.value)}
              className="hidden"
            />
            <span
              className={`h-10 w-full sm:w-40 flex items-center justify-center rounded-lg text-xs sm:text-sm transition ${
                selected === "pyqs"
                  ? "bg-teal-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              PYQs
            </span>
          </label>

          {/* Notes */}
          <label className="cursor-pointer">
            <input
              type="radio"
              name="category"
              value="notes"
              checked={selected === "notes"}
              onChange={(e) => setSelected(e.target.value)}
              className="hidden"
            />
            <span
              className={`h-10 w-full sm:w-40 flex items-center justify-center rounded-lg text-xs sm:text-sm transition ${
                selected === "notes"
                  ? "bg-teal-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Notes
            </span>
          </label>

          {/* Current Affairs */}
          <label className="cursor-pointer">
            <input
              type="radio"
              name="category"
              value="currentaffairs"
              checked={selected === "currentaffairs"}
              onChange={(e) => setSelected(e.target.value)}
              className="hidden"
            />
            <span
              className={`h-10 w-full sm:w-40 flex items-center justify-center rounded-lg text-xs sm:text-sm transition px-2 ${
                selected === "currentaffairs"
                  ? "bg-teal-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Current Affairs
            </span>
          </label>

          {/* Books */}
          <label className="cursor-pointer">
            <input
              type="radio"
              name="category"
              value="books"
              checked={selected === "books"}
              onChange={(e) => setSelected(e.target.value)}
              className="hidden"
            />
            <span
              className={`h-10 w-full sm:w-40 flex items-center justify-center rounded-lg text-xs sm:text-sm transition ${
                selected === "books"
                  ? "bg-teal-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Books
            </span>
          </label>

          {/* Question Bank */}
          <label className="cursor-pointer col-span-2 sm:col-span-1">
            <input
              type="radio"
              name="category"
              value="questionbank"
              checked={selected === "questionbank"}
              onChange={(e) => setSelected(e.target.value)}
              className="hidden"
            />
            <span
              className={`h-10 w-full sm:w-40 flex items-center justify-center rounded-lg text-xs sm:text-sm transition px-2 ${
                selected === "questionbank"
                  ? "bg-teal-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Question Bank
            </span>
          </label>
        </div>
        <div className="">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-5 capitalize">
            List of {selected}
          </h2>
          {selected === "books" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 mb-8 sm:mb-10">
              <BookCard image={book_1} title="Book 1" price="$10" />
              <BookCard image={book_2} title="Book 2" price="$20" />
              <BookCard image={book_3} title="Book 3" price="$30" />
              <BookCard image={book_4} title="Book 4" price="$40" />
              <BookCard image={book_1} title="Book 1" price="$10" />
              <BookCard image={book_2} title="Book 2" price="$20" />
              <BookCard image={book_3} title="Book 3" price="$30" />
              <BookCard image={book_4} title="Book 4" price="$40" />
            </div>
          )}
          {selected === "currentaffairs" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 mb-8 sm:mb-10">
              {data.map((note) => (
                <NotesCard
                  key={note._id}
                  thumbnail={note.thumbnail}
                  title={note.title}
                  price={note.price}
                  id={note._id}
                />
              )).slice(0, 6)}
            </div>
          )}
          {selected === "notes" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 mb-8 sm:mb-10">
              {notes.map((note) => (
                <NotesCard
                  key={note._id}
                  thumbnail={note.thumbnail}
                  title={note.title}
                  price={note.price}
                  id={note._id}
                />
              )).slice(0, 6)}
            </div>
          )}
          {selected === "questionbank" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 mb-8 sm:mb-10">
              {data.map((note) => (
                <NotesCard
                  key={note._id}
                  thumbnail={note.thumbnail}
                  title={note.title}
                  price={note.price}
                  id={note._id}
                />
              )).slice(0, 6)}
            </div>
          )}
          {selected === "pyqs" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 mb-8 sm:mb-10">
              {data.map((note) => (
                <NotesCard
                  key={note._id}
                  thumbnail={note.thumbnail}
                  title={note.title}
                  price={note.price}
                  id={note._id}
                />
              )).slice(0, 6)}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Notes;
