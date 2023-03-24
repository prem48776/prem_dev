import React from "react";
import { FcGlobe } from "react-icons/fc";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { DiJavascript1 } from "react-icons/di";
const Working = () => {
  return (
    <>
      <div className="p-4 lg:flex justify-between items-center md:flex sm:d-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="sm:w-full flex lg:w-[50%] justify-between   ">
          <div className="text-left ">
            <h3 className="font-mono text-[#f3f28f]"> Programming language</h3>
            <div className="text-lg py-2 text-[#cd0967]">1. Javascript</div>
            <div className="text-lg py-2 text-[#cd0967]">2. Hypertext Markup Language (HTML)</div>
            <div className="text-lg py-2 text-[#cd0967]">3. Cascading Style Sheets (CSS)</div>
            <div className="text-lg py-2 text-[#cd0967]">4. Python</div>
            <div className="text-lg py-2 text-[#cd0967]">5. Note Javascript</div>
          </div>
          <div className="Lg:text-right sm:text-left ">
            <h3 className="font-mono text-[#f3f28f]">Flag of Language</h3>
            <div className="text-3xl py-2  text-[#cd0967]">
              <TbBrandJavascript />
            </div>
            <div className="text-3xl py-2  text-[#cd0967]">
              <DiHtml5 />
            </div>
            <div className="text-3xl py-2  text-[#cd0967]">
              <DiCss3 />
            </div>
            <div className="text-3xl py-2  text-[#cd0967]">
              <FaPython />
            </div>
            <div className="text-3xl py-2  text-[#cd0967]">
              <DiJavascript1 />
            </div>
          </div>
        </div>
        <div className=" text-left  lg:w-[45%] md:w-[50%] sm:w-full font-sans text-lg py-4   ">
          <h3 className="flex text-[#08596d]">
            Our Service's or Working Dateils <FcGlobe />
          </h3>
          <li className="text-[#312f9c]">All type of web application design.</li>
          <li className="text-[#312f9c]">Any type of Javascript website build and hosting on internet.</li>
          <li className="text-[#312f9c]">Grafic design for your logo and other components.</li>
          <li className="text-[#312f9c]">We are give to insure 100% fasted service.</li>
          <li className="text-[#312f9c]">tweenty four hours ( 24 hours ) active our contact.</li>
          <li className="text-[#312f9c]">tweenty four hours ( 24 hours ) active our contact.</li>
          <li className="text-[#312f9c]">tweenty four hours ( 24 hours ) active our contact.</li>
          
          <li className="text-[#312f9c]">
            I have to enough knowlage about computer and mobile configration.
          </li>
        </div>
      </div>
    </>
  );
};

export default Working;
