import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar_v2 from "../components/Navbar_v2";
import useAuthStore from "../store/authStore";

const Login = () => {
  const { login } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ email, password });
    navigate("/");
  };

  return (
    <div>
    <Navbar_v2 />
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-serif mb-6">Login —</h2>

        <form className="flex flex-col gap-4 w-80">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[#49BBBD] px-3 py-2 outline-none"
          />

          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border border-[#49BBBD] px-3 py-2 outline-none"
          />

          <div className="flex justify-between text-sm text-gray-600">
            <Link to="/signup" className="cursor-pointer hover:underline">
              New to this website?
            </Link>

            <Link to="/signup" className="cursor-pointer hover:underline">
              Create account
            </Link>
          </div>

          <button
            onClick={handleSubmit}
            className="bg-[#49BBBD] text-white py-2 mt-2 hover:bg-[#49BBBD]/80  transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;