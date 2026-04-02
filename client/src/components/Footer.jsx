import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#252641] text-white py-16 px-6">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        {/* Logo + Text */}
        <div className="flex items-center">
          <h3 className="text-2xl font-semibold px-5 py-1">TQ CIVILS</h3>
          <p className="text-sm text-gray-300 border-l border-white px-5 py-1">
           UPSC & UPPCS <br /> Online Coaching
          </p>
        </div>

        {/* Newsletter */}
        <p className="text-gray-300">Get Daily Current Affairs Updates</p>

        {/* Input + Button */}
        <div className="flex items-center gap-3">
          <input
            type="email"
            placeholder="Your Email"
            className="bg-transparent border border-gray-500 px-5 py-2 rounded-full outline-none text-sm w-80"
          />

          <button className="bg-gradient-to-r from-[#00CBB8] to-[#3AA6A6] px-6 font-semibold py-2 rounded-full text-sm">
            Subscribe
          </button>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-gray-400 text-sm mt-4">
          <p className="cursor-pointer">Careers</p>
          <p>|</p>
          <p className="cursor-pointer">Privacy Policy</p>
          <p>|</p>
          <p className="cursor-pointer">Terms & Conditions</p>
        </div>

        {/* Bottom Text */}
        <p className="text-gray-400 text-sm mt-2">
          © 2026 TQ CIVILS. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
