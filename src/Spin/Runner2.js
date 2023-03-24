import React from "react";
import "./runner.css";
import HashLoader from "react-spinners/HashLoader";
const Runner2 = () => {
  return (
    <div className='spin'>
      <HashLoader
        color="#36d7b7"
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Runner2;
