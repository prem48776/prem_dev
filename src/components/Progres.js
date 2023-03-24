import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const Progres = () => {
  return (
    <>
    
    <div className="border-[#1e8b7c] border-dashed rounded-xl border-2 ">
    <div className=" justify-center  p-3">
      <div className="p-2">
          <p className="font-serif pl-1"> HTML</p>
        <ProgressBar animated now={98} variant="danger" />
      </div>

      <div className="p-2">
      <p className="font-serif pl-1"> CSS</p>
        <ProgressBar animated now={90} />
      </div>
      <div className="p-2">
      <p className="font-serif pl-1"> Javascript</p>
        <ProgressBar animated now={75} variant="dark"/>
      </div>

      <div className="p-2 mb-2">
      <p className="font-serif pl-1 "> MERN-STACK</p>
        <ProgressBar animated now={90} variant="warning"/>
      </div>
    </div>
    </div>
   
    </>
    
  );
};

export default Progres;
