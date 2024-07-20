import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../Assets/logo white.png";

function Header() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center max-w-full mx-auto px-4 text-white h-24 bg-black">
      {/* <h1 className="w-full text-3xl font-bold text-[#00df9a]">React</h1> */}
      <img src={Logo} alt="" className="rounded w-20 md:w-32" />
      <ul className="hidden md:flex">
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
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <img src={Logo} alt="" className="rounded w-20 md:w-32 m-4" />
        <ul className="uppercase p-4">
          <a href="#home">
            <li className="p-4 border-b border-gray-600">Home</li>
          </a>
          <a href="#projects" onClick={handleNav}>
            <li className="p-4 border-b border-gray-600">Services</li>
          </a>
          <a href="#about" onClick={handleNav}>
            <li className="p-4 border-b border-gray-600">About</li>
          </a>
          <a href="#contact">
            <li className="p-4 border-b border-gray-600">Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Header;
