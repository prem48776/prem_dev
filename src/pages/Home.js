import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import "../App.css";
import Biodata from "../components/Biodata";
import Counter from "../components/Counter";
import Progres from "../components/Progres";
import Working from "../components/Working";
const Home = () => {
  return (
    <>
      <div className="home_page ">
        <div className="lg:w-8/12 h-40  d-block m-auto sm:w-full  text-Left items-center ">
          <h2 className="p-4 text-sky-400">
            Hello sir
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Red Hat Display",
                color: "#890833",
                fontWeight: 150,
                fontSize: "1em",
              }}
              startDelay={2000}
              cursorColor="#890844"
              typeSpeed={150}
              multiText={[
                "Welcome to Prem dev website...",
                "....I am a Devloper",
                "Forent end devloper ... Backend devloper",
                "..Javascript devloper",
                "I am ready to devlop your softer..",
              ]}
              multiTextDelay={1000}
            />
          </h2>
        </div>
        <div className="lg:w-8/12  pt-5  bg-[#082028]   rounded-lg text-lg text-white d-block m-auto sm:w-full text-Left items-center pt-0 p-4">
          Software developers are the creative, brainstorming masterminds behind
          computer programs of all sorts. While some software developers may
          focus on a specific program or app, others create giant networks or
          underlying systems that help trigger and power other programs.
          <h6 className="pt-3 text-green-800 font-serif">
            If you are interested to work wiht me link in bottom.....
          </h6>
        </div>
        <div className="w-12/12 mt-5  d-block m-auto text-center">
          <button className=" hover:bg-sky-200 border-2 border-sky-500 m-2 py-2 px-4 rounded-3xl focus:bg-sky-800 focus:text-white   ">
            See More..
          </button>
          <button className=" hover:bg-sky-200 border-2 border-sky-500 m-2 py-2 px-4 rounded-3xl focus:bg-sky-800 focus:text-white   ">
            Contact-Me{" "}
          </button>
        </div>
      </div>
      <Counter />
      <div className="bg-[#0c181b] text-white py-8 ">
      <div className="justify-between items-center m-auto lg:w-10/12 lg:flex md:flex ">
        <div className="lg:w-5/12 md:w-6/12 ">
          <Progres className=" " />
        </div>
        <div className="p-2 ">
         <Biodata />
        </div>
      </div>
      </div>

      <Working />
    </>
  );
};

export default Home;
