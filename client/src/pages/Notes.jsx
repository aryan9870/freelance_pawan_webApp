import React from "react";
import Navbar_v2 from "../components/Navbar_v2";
import { notesRectangle, ellipse, admin, uppcs } from "../assets/assets";
import BookCard from "../components/BookCard";
import { book_1, book_2, book_3, book_4 } from "../assets/assets";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import NotesCard from "../components/NotesCard";

const Notes = () => {

  const [selected, setSelected] = useState("Books");

  return (
    <>
      <Navbar_v2 />
      <div className="mt-22 mx-20 text-gray-600">
        <div
          className="flex h-[50vh] border rounded-lg p-5"
          style={{
            backgroundImage: `url(${notesRectangle})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-1/4 p-2">
            <div className="w-full h-full bg-white rounded-full p-1">
              <img className="w-full h-full rounded-full" src={admin} alt="" />
            </div>
          </div>
          <div className="w-3/4 border rounded-2xl bg-white/80 p-10 flex flex-col gap-5 justify-center">
            <h1 className="text-2xl font-semibold mb-2">Pawan Sir</h1>
            <p className="mb-2">Assistant Professor at Mcmaster University</p>
            <p className="mb-2 text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enum
              ad minim veniam, quis nostrud
            </p>
            <div className="flex gap-10 items-center justify-between">
              <div className="flex gap-10 items-center">
                <span>4.9 instructor Rating</span>
                <span>1,592 Students</span>
                <span>Courses</span>
              </div>
              <div className="flex gap-5 items-center">
                <FaInstagram className="text-xl text-teal-600" />
                <FaInstagram className="text-xl text-teal-600" />
                <FaInstagram className="text-xl text-teal-600" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 py-10 flex-wrap">
          {/* PYQs */}
          <label className="cursor-pointer">
            <input
              type="radio"
              name="category"
              value="PYQs"
              checked={selected === "PYQs"}
              onChange={(e) => setSelected(e.target.value)}
              className="hidden"
            />
            <span
              className={`h-10 w-40 flex items-center justify-center rounded-lg text-sm transition ${
                selected === "PYQs"
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
              value="Notes"
              checked={selected === "Notes"}
              onChange={(e) => setSelected(e.target.value)}
              className="hidden"
            />
            <span
              className={`h-10 w-40 flex items-center justify-center rounded-lg text-sm transition ${
                selected === "Notes"
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
              value="Current Affairs"
              checked={selected === "Current Affairs"}
              onChange={(e) => setSelected(e.target.value)}
              className="hidden"
            />
            <span
              className={`h-10 w-40 flex items-center justify-center rounded-lg text-sm transition ${
                selected === "Current Affairs"
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
              value="Books"
              checked={selected === "Books"}
              onChange={(e) => setSelected(e.target.value)}
              className="hidden"
            />
            <span
              className={`h-10 w-40 flex items-center justify-center rounded-lg text-sm transition ${
                selected === "Books"
                  ? "bg-teal-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Books
            </span>
          </label>

          {/* Question Bank */}
          <label className="cursor-pointer">
            <input
              type="radio"
              name="category"
              value="Question Bank"
              checked={selected === "Question Bank"}
              onChange={(e) => setSelected(e.target.value)}
              className="hidden"
            />
            <span
              className={`h-10 w-40 flex items-center justify-center rounded-lg text-sm transition ${
                selected === "Question Bank"
                  ? "bg-teal-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Question Bank
            </span>
          </label>

          
        </div>
        <div className="">
          <h2 className="text-2xl font-semibold mb-5">List of {selected}</h2>
          {selected === "Books" && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-10">
            <BookCard image={book_1} title="Book 1" price="$10" />
            <BookCard image={book_2} title="Book 2" price="$20" />
            <BookCard image={book_3} title="Book 3" price="$30" />
            <BookCard image={book_4} title="Book 4" price="$40" />
            <BookCard image={book_1} title="Book 1" price="$10" />
            <BookCard image={book_2} title="Book 2" price="$20" />
            <BookCard image={book_3} title="Book 3" price="$30" />
            <BookCard image={book_4} title="Book 4" price="$40" />
           
          </div>}
          {selected === "Notes" && <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
             <NotesCard thumbnail={uppcs} title="UPPCS" price="$10"/>
             <NotesCard thumbnail={uppcs} title="UPPCS" price="$10"/>
             <NotesCard thumbnail={uppcs} title="UPPCS" price="$10"/>
             <NotesCard thumbnail={uppcs} title="UPPCS" price="$10"/>
             <NotesCard thumbnail={uppcs} title="UPPCS" price="$10"/>
             <NotesCard thumbnail={uppcs} title="UPPCS" price="$10"/>
          </div>}
          
        </div>
      </div>
    </>
  );
};

export default Notes;
