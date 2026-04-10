import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar_v2 from "../components/Navbar_v2";
import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { register } = useAuthStore();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await register(user);
    if (res) {
      navigate("/");
    }
  };

  return (
    <div>
      <Navbar_v2 />
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-serif mb-6">Sign Up —</h2>

          <form className="flex flex-col gap-4 w-80">
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              placeholder="Name"
              className="border border-[#49BBBD] px-3 py-2 outline-none"
            />

            <input
              type="email"
              name="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Email"
              className="border border-[#49BBBD] px-3 py-2 outline-none"
            />

            <input
              type="password"
              name="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Password"
              className="border border-[#49BBBD] px-3 py-2 outline-none"
            />

            <div className="flex justify-between text-sm text-gray-600">
              <Link to="/login" className="cursor-pointer hover:underline">
                Already have an account?
              </Link>

              <Link to="/login" className="cursor-pointer hover:underline">
                Login
              </Link>
            </div>

            <button
              onClick={handleSubmit}
              className="bg-[#49BBBD] text-white py-2 mt-2 hover:bg-[#49BBBD]/80 transition"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
