import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import toast from "react-hot-toast";
import LoadingSpinner from "../components/LoadingSpinner";

const AddCourse = () => {
  const [loading, setLoading] = useState(false);
  const [thumbnail, setThumbnail] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    price: "",
    discountPrice: "",
    duration: "",
    instructor: "",
    category: "",
    isFeatured: false,
  });

  const [whatYouWillLearn, setWhatYouWillLearn] = useState([]);
  const [requirements, setRequirements] = useState([]);

  const [learnInput, setLearnInput] = useState("");
  const [reqInput, setReqInput] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddLearn = () => {
    if (!learnInput.trim()) return;

    setWhatYouWillLearn([...whatYouWillLearn, learnInput]);
    setLearnInput("");
  };

  const handleAddRequirement = () => {
    if (!reqInput.trim()) return;

    setRequirements([...requirements, reqInput]);
    setReqInput("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!thumbnail) {
      return toast.error("Thumbnail is required");
    }

    if (!formData.title) {
      return toast.error("Title is required");
    }

    if (!formData.description) {
      return toast.error("Description is required");
    }

    if (!formData.price) {
      return toast.error("Price is required");
    }

    if (!formData.duration) {
      return toast.error("Duration is required");
    }

    if (!formData.instructor) {
      return toast.error("Instructor is required");
    }

    if (!formData.category) {
      return toast.error("Category is required");
    }

    console.log({
      ...formData,
      thumbnail,
      whatYouWillLearn,
      requirements,
    });

    const form = new FormData();
    form.append("title", formData.title);
    form.append("subtitle", formData.subtitle);
    form.append("description", formData.description);
    form.append("price", formData.price);
    form.append("discountPrice", formData.discountPrice);
    form.append("duration", formData.duration);
    form.append("instructor", formData.instructor);
    form.append("category", formData.category);
    form.append("isFeatured", formData.isFeatured.toString());
    form.append("thumbnail", thumbnail);
    form.append("requirements", JSON.stringify(requirements));
    form.append("whatYouWillLearn", JSON.stringify(whatYouWillLearn));

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:3000/api/courses", form, {
        withCredentials: true,
      });
      if (res.status === 201) {
        toast.success("Course added successfully");
        setFormData({
          title: "",
          subtitle: "",
          description: "",
          price: "",
          discountPrice: "",
          duration: "",
          instructor: "",
          category: "",
          isFeatured: false,
        });
        setWhatYouWillLearn([]);
        setRequirements([]);
        setThumbnail("");
      }
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="">
        <div className="mb-3">
          <p className="mb-1">Upload Course Thumbnail</p>
          <label htmlFor="thumbnail" className="cursor-pointer">
            <input
              onChange={(e) => setThumbnail(e.target.files[0])}
              type="file"
              accept="image/*"
              name="thumbnail"
              id="thumbnail"
              className="hidden"
            />
            <div className="border border-gray-200 rounded-xs h-20 w-32 flex items-center justify-center">
              {thumbnail ? (
                <img
                  src={URL.createObjectURL(thumbnail)}
                  alt="thumbnail"
                  className="w-full h-full object-cover"
                />
              ) : (
                <IoCloudUploadOutline size={20} />
              )}
            </div>
          </label>
        </div>
        <div className="flex gap-5 mb-3 max-md:flex-col">
          <div className="">
            <p className="mb-1">Course Title</p>
            <input
              value={formData.title}
              onChange={handleChange}
              type="text"
              name="title"
              id="title"
              className="border py-1 px-2 rounded-xs w-96 max-md:w-full border-gray-200"
            />
          </div>
          <div className="">
            <p className="mb-1">Course Sub Title</p>
            <input
              value={formData.subtitle}
              onChange={handleChange}
              type="text"
              name="subtitle"
              id="subtitle"
              className="border py-1 px-2 rounded-xs max-md:w-full border-gray-200"
            />
          </div>
        </div>
        <div className="mb-3">
          <p className="mb-1">Course Description</p>
          <textarea
            value={formData.description}
            onChange={handleChange}
            name="description"
            id="description"
            rows="3"
            className="border py-1 px-2 rounded-xs max-md:w-10 border-gray-200 w-[60%]"
          ></textarea>
        </div>
        <div className="flex gap-5 mb-3 flex-wrap">
          <div className="flex flex-col gap-2">
            <p>Course Price</p>
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
            <p>Discount Price</p>
            <input
              value={formData.discountPrice}
              onChange={handleChange}
              type="number"
              name="discountPrice"
              id="discountPrice"
              className="border border-gray-200 py-1 px-2 rounded-xs w-32"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Course Duration</p>
            <input
              value={formData.duration}
              onChange={handleChange}
              type="text"
              name="duration"
              id="duration"
              placeholder="3 months"
              className="border border-gray-200 py-1 px-2 rounded-xs w-32"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Course Instructor</p>
            <input
              value={formData.instructor}
              onChange={handleChange}
              type="text"
              name="instructor"
              id="instructor"
              placeholder="Pawan Sir"
              className="border border-gray-200 py-1 px-2 rounded-xs w-32"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>What You Will Learn</p>

          <div className="flex gap-2 ">
            <input
              type="text"
              value={learnInput}
              onChange={(e) => setLearnInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleAddLearn();
              }}
              className="border border-gray-200 py-1 px-2 rounded-xs w-96 max-md:w-full"
              placeholder="Enter skill"
            />

            <button
              onClick={handleAddLearn}
              className="bg-black text-white w-8 h-8 rounded-xs cursor-pointer flex items-center justify-center"
            >
              <IoAdd size={20} />
            </button>
          </div>
          <div className="flex flex-col gap-2 w-96 mb-3">
            {whatYouWillLearn.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm max-w-[300px] justify-between"
              >
                <span className="truncate">{item}</span>

                <button
                  onClick={() => {
                    setWhatYouWillLearn(
                      whatYouWillLearn.filter((_, i) => i !== index),
                    );
                  }}
                  className="text-gray-500 hover:text-black cursor-pointer text-xs"
                >
                  <IoClose size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <p>Course Requirements</p>

          <div className="flex gap-2 ">
            <input
              type="text"
              value={reqInput}
              onChange={(e) => setReqInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleAddRequirement();
              }}
              className="border border-gray-200 py-1 px-2 rounded-xs w-96 max-md:w-full"
              placeholder="Enter requirement"
            />

            <button
              onClick={handleAddRequirement}
              className="bg-black text-white w-8 h-8 rounded-xs cursor-pointer flex items-center justify-center"
            >
              <IoAdd size={20} />
            </button>
          </div>
          <div className="flex flex-col gap-2 w-96">
            {requirements.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-gray-100 py-1 px-3 rounded-full text-sm max-w-[300px] justify-between"
              >
                <span className="truncate">{item}</span>

                <button
                  onClick={() => {
                    setRequirements(requirements.filter((_, i) => i !== index));
                  }}
                  className="text-gray-500 hover:text-black cursor-pointer text-xs"
                >
                  <IoClose size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <p>Course Category</p>
          <select
            value={formData.category}
            onChange={handleChange}
            name="category"
            id="category"
            className="border border-gray-200 py-1 px-2 rounded-xs w-fit"
          >
            <option value="">Select Category</option>
            <option value="foundation">Foundation Course</option>
            <option value="prelims">Prelims Preepration</option>
            <option value="mains">Mains Preepration</option>
            <option value="testSeries">Test Series</option>
            <option value="currentAffairs">Current Affairs</option>
            <option value="interview">Interview Preepration</option>
            <option value="mentorship">Mentorship Program</option>
          </select>
        </div>

        <div className="mb-3 flex gap-2 items-center">
          <input
            checked={formData.isFeatured}
            onChange={(e) =>
              setFormData({ ...formData, isFeatured: e.target.checked })
            }
            type="checkbox"
            name="isFeatured"
            id="isFeatured"
            className="accent-black cursor-pointer w-4 h-4"
          />
          <label htmlFor="isFeatured">Is Featured</label>
        </div>

        <button
          onClick={handleSubmit}
          className="bg-black text-white py-2 px-5 rounded-xs cursor-pointer"
        >
          {loading ? "Adding Course..." : "Add Course"}
        </button>
      </div>
    </>
  );
};

export default AddCourse;
