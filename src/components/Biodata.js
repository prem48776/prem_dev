import React from "react";
import dev from "../photos/dev.png";
import { GiSelfLove } from "react-icons/gi";
import { FaRegShareSquare } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
const Biodata = () => {
  return (
    <>
      <div className="border-[#b30a51] border-2 border-dashed p-4 text-center rounded-2xl ">
        <div className="">
          <img
            src={dev}
            alt=""
            style={{
              width: "250px",
              height: "200px",
              margin: "auto",
              display: "block",
              borderRadius: "20%",
            }}
          />
        </div>
        <div className="p-2 italic font-mono text-blue-800 ">
          MD NIROB HOSSEN PREM
        </div>
        <div className="flex justify-between text-2xl items-center p-2 text-[#f50542] ">
          <GiSelfLove  /> <AiOutlineMessage  />
          <FaRegShareSquare  />
        </div>
      </div>
    </>
  );
};

export default Biodata;
