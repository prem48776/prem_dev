import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import {AiFillYoutube} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
const Counter = () => {
  const [count, setCount] = useState(false);
  return (
    <>
      <div className="bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 font-mono ">
      <h3 className="lg:w-6/12 text-center text-white p-3  border-b-2 border-dashed border-rose-600  m-auto sm:w-[90%]">Our followers or Subscriber Quantity</h3>
      <ScrollTrigger
        onEnter={() => setCount(true)}
        onExit={() => setCount(false)}
      >
        <div className="lg:w-11/12 m-auto  h-40 text-center flex justify-between items-center px-8 ">
          <div className="text-[#54082a]  text-xl font-bold   ">
            <AiFillYoutube  className="text-red-600 text-6xl ml-5"/>
            {count && (
              <CountUp start={0} end={1002012} delay={0} duration={5} > 
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            )}
          </div>

          <div className="text-[#54082a] text-center text-xl font-bold ">
            <BsInstagram   className="text-[#8c0b4f] text-5xl mb-2 ml-3" />
            {count && (
              <CountUp start={0} end={969521} delay={0} duration={5}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            )}
          </div>

          <div className="text-[#54082a] text-center text-xl font-bold ">
            <AiFillTwitterCircle   className="text-[#160b8c] text-6xl mb-2 ml-2"  />
            {count && (
              <CountUp start={0} end={586422} delay={0} duration={5}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            )}
          </div>
        </div>
      </ScrollTrigger>
      </div>
    </>
  );
};

export default Counter;
