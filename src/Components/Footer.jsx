import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-black text-white pt-10">
      <div className="grid md:grid-cols-2 grid-cols-1 sm:justify-center sm:items-center sm:text-center">
        <div className="flex  my-6 gap-x-4 md:justify-start justify-center mx-2 h-15">
          <FaFacebook size={30} />
          <FaTwitter size={30} />
          <FaGithub size={30} />
          <FaInstagram size={30} />
        </div>

        <div className="flex  gap-x-4 md:justify-end justify-center mx-2 h-15">
          <ul className="flex md:justify-start justify-center">
            <a href="#home">
              <li className="p-4">Home</li>
            </a>
            <a href="#projects">
              <li className="p-4">Services</li>
            </a>
            <a href="#about">
              <li className="p-4">About</li>
            </a>
            <a href="#contact">
              <li className="p-4">Contact</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="w-full bg-[#00df9a] h-0.5  "></div>
      <div className="text-center my-5 font-semibold pt-2">
        Copyright © 2024
      </div>
    </div>
  );
}

export default Footer;
