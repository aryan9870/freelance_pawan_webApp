import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useState } from "react";
import useNotesStore from "../store/notesStore.js";

const AddNotes = () => {
  const { uploadNotes } = useNotesStore();
  const [image, setImage] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    subject: "",
    category: "",
    isFree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!notes){
      toast.error("Please select a file");
      return;
    }
    if(!image){
      toast.error("Please select a thumbnail");
      return;
    }
    if(!formData.category || formData.category === ""){
      toast.error("Please select a category");
      return;
    } 
    setLoading(true);
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("price", Number(formData.price));
    data.append("subject", formData.subject);
    data.append("category", formData.category);
    data.append("isFree", formData.isFree);
    data.append("file", notes);
    data.append("thumbnail", image);
    const res = await uploadNotes(data);
    if(res){
      setFormData({
        title: "",
        description: "",
        price: "",
        subject: "",
        category: "",
        isFree: false,
      });
      setImage("");
      setNotes("");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="">
        <div className="mb-3">
          <h1 className="mb-1">Upload Notes</h1>
          <label
            htmlFor="notes"
            className="cursor-pointer flex gap-5 items-center"
          >
            <input
              type="file"
              name="notes"
              id="notes"
              hidden
              onChange={(e) => setNotes(e.target.files[0])}
              accept=".pdf"
            />
            <div className="cursor-pointer border border-gray-200 py-1 px-2 rounded-sm">
              {notes ? notes.name : "Choose file no file chosen"}
            </div>
          </label>
        </div>
        <div className="mb-3">
          <div>
            <div className="">
              <p className="mb-1">Upload Thumbnail</p>
              <div className="flex gap-5">
                <label htmlFor={`image`}>
                  <input
                    onChange={(e) => setImage(e.target.files[0])}
                    type="file"
                    name={`image`}
                    id={`image`}
                    hidden
                  />
                  <div className="w-30 h-20 border border-gray-300 flex items-center justify-center overflow-hidden cursor-pointer">
                    {image ? (
                      <img
                        src={URL.createObjectURL(image)}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <IoCloudUploadOutline size={25} />
                    )}
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <p className="mb-1">Title</p>
          <input
            value={formData.title}
            onChange={handleChange}
            type="text"
            name="title"
            id="title"
            className="border py-1 px-2 rounded-xs w-96 max-md:w-full border-gray-200"
          />
        </div>
        <div className="mb-3">
          <p className="mb-1">Description</p>
          <textarea
            value={formData.description}
            onChange={handleChange}
            name="description"
            id="description"
            cols="30"
            rows="3"
            className="border py-1 px-2 rounded-xs w-96 max-md:w-full border-gray-200"
          ></textarea>
        </div>
        <div className="flex gap-5 mb-3 flex-wrap">
          <div className="flex flex-col gap-2">
            <p>Price</p>
            <input
              value={formData.price}
              onChange={handleChange}
              type="number"
              name="price"
              id="price"
              className="border border-gray-200 py-1 px-2 rounded-xs w-32"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Subject</p>
            <select
              onChange={handleChange}
              value={formData.subject}
              name="subject"
              id="subject"
              className="border border-gray-200 py-1 px-2 rounded-xs w-fit"
            >
              <option value="">Select Subject</option>
              <option value="geography">geography</option>
              <option value="history">history</option>
              <option value="polity">polity</option>
              <option value="economics">economics</option>
              <option value="environment">environment</option>
              <option value="science">science</option>
              <option value="currentaffairs">current affairs</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <p>Category</p>
            <select
              value={formData.category}
              onChange={handleChange}
              name="category"
              id="category"
              className="border border-gray-200 py-1 px-2 rounded-xs w-fit"
            >
              <option value="">Select Category</option>
              <option value="notes">Notes</option>
              <option value="books">Books</option>
              <option value="questionbank">Question Bank</option>
              <option value="pyqs">Previous Year Papers</option>
              <option value="currentaffairs">Current Affairs</option>
            </select>
          </div>
        </div>
        <div className="mb-3 flex gap-2 items-center">
          <input
            type="checkbox"
            name="isFree"
            checked={formData.isFree}
            onChange={handleChange}
            className="accent-black cursor-pointer"
          />
          <label htmlFor="isFree">Free</label>
        </div>
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-black text-white py-2 px-5 rounded-xs cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Adding Notes..." : "Add Notes"}
        </button>
      </div>
    </>
  );
};

export default AddNotes;
