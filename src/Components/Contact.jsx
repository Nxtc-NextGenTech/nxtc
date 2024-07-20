import React from "react";
import { FaMailBulk, FaMobile } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="w-full h-screen  bg-white text-black px-4 transition-transform transform-gpu duration-500 ease-in-out items-center justify-center  flex flex-col gap-y-10 py-56"
      id="contact"
    >
      <h1 className="font-bold md:text-4xl text-2xl mt-10">Contact Us</h1>

      {/* Contact Form */}
      <div className="w-max p-10 shadow-md mx-auto">
        <form action="">
          <div className="mx-4  my-2 grid ">
            <label htmlFor="name" className="font-semibold font-sans">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className=" border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mx-4 my-2 grid ">
            <label htmlFor="email" className="font-semibold font-sans">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mx-4 my-2 grid ">
            <label htmlFor="message" className="font-semibold font-sans">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Enter Your Message"
              className="w-full border border-gray-300 rounded-md p-2 font-monospace"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#00df9a] p-2 rounded-md font-semibold font-sans hover:bg-black hover:text-[#00df9a] ease-in duration-300"
          >
            Send
          </button>
        </form>

        <div className="flex flex-row items-center justify-center m-5">
          <a href="mailto:help.nextgentech@gmail.com">
            <FaMailBulk size={50} color="#00df9a" />
          </a>
          <a href="tel:919526600396">
            <FaMobile size={50} color="#00df9a" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
