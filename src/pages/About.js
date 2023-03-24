import React from "react";
import Biodata from "../components/Biodata";
import Progres from "../components/Progres";


const About = () => {
  return (
    <>
    <div className="bg-gradient-to-r from-[#e08308] via-[#494747] to-[#9d3b4b] text-white">

    <h5 className="text-center w-[400px] m-auto p-4 border-b-2 border-[#115d58] ">My exprence or boidata here ---</h5>
    <div className="sm:d-block md:flex lg:flex w-10/12 m-auto py-4 px-6  justify-between items-center text-center">
      <div className="sm:w-full md:w-6/12 lg:w-6/12 p-2">
      <Biodata />
      </div>
      <div className="sm:w-full md:w-6/12 lg:w-6/12 p-2">
        <Progres />
      </div>
    </div>
    
    </div>

    </>
    
  );
};

export default About;
