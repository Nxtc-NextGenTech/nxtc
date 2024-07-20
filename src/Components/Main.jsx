import React from "react";
import { ReactTyped } from "react-typed";

function Main() {
  return (
    <div className="text-white " id="home">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="font-bold text-3xl mt-[100px] text-[#00df9a]">
          NextGenTech
        </h1>

        <ReactTyped
          className="font-thin text-2xl mt-2"
          strings={["Leading Software Developing Firm"]}
          typeSpeed={100}
          backSpeed={140}
          loop={true}
        />
      </div>
    </div>
  );
}

export default Main;
