import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#1e1e1e] text-white py-16 px-4 md:px-20"
    >
      <div className="text-center mb-10">
        <h2 className="text-sm text-gray-400 uppercase">get in touch</h2>
        <h1 className="text-4xl font-bold">Contact</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left: Contact Info */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center bg-[#2c2c2c] p-4 rounded">
            <FaPhoneAlt className="text-xl text-teal-400 mr-4" />
            <span>+8801231231</span>
          </div>
          <div className="flex items-center bg-[#2c2c2c] p-4 rounded">
            <FaEnvelope className="text-xl text-teal-400 mr-4" />
            <span>websitr@gmail.com</span>
          </div>
          <div className="flex items-center bg-[#2c2c2c] p-4 rounded">
            <FaMapMarkerAlt className="text-xl text-teal-400 mr-4" />
            <span>Chittagong, Bangladesh</span>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-[1px] h-auto bg-gray-600 mx-5"></div>

        {/* Right: Contact Form */}
        <form className="flex-1 space-y-4 w-full">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-[#2c2c2c] p-3 rounded text-white outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-[#2c2c2c] p-3 rounded text-white outline-none"
          />
          <textarea
            placeholder="Your message"
            rows="5"
            className="w-full bg-[#2c2c2c] p-3 rounded text-white outline-none"
          />
          <button
            type="submit"
            className="bg-white text-black px-6 py-2 rounded hover:bg-gray-300 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
