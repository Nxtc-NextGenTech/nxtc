import React from "react";
import logo from "../Assets/logo.jpg";

function About() {
  return (
    <div
      className="w-full h-screen  bg-black text-white py-16 px-4 transition-transform transform-gpu duration-500 ease-in-out items-center justify-center  flex flex-col gap-y-10"
      id="about"
    >
      <h1 className="font-bold md:text-4xl text-2xl">About Us</h1>

      <div className="container max-w-[1240px] mx-auto grid md:grid-cols-2 items-center justify-center gap-y-10">
        <img src={logo} alt="" className="rounded-full w-80 mx-auto  hover:drop-shadow-glow  duration-300 ease-in-out" />
        <p className="text-justify text-md">
          Welcome to <span className="text-[#00df9a] font-semibold">NextGenTech</span>, where innovation meets excellence. Established
          in 2024, we are a leading provider of comprehensive digital solutions
          designed to help businesses thrive in today's dynamic and
          ever-evolving landscape. Our team of dedicated professionals is
          passionate about delivering exceptional results and transforming ideas
          into reality. At <span className="text-[#00df9a] font-semibold">NextGenTech</span>, we specialize in a range of services,
          including website development, mobile app development, and custom
          software development. Our mission is to empower businesses with
          cutting-edge technology, ensuring they stay ahead of the competition
          and achieve their goals efficiently.
        </p>
      </div>
    </div>
  );
}

export default About;
