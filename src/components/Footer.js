import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div className="h-[80vh] md:flex justify-between px-5 w-full flex-wrap bg-slate-800 text-white text-left py-2  ">
        <div className="sm:w-full md:w-4/12 lg:w-4/12  px-2 py-2 mt-2">
          <div className="text-lg mx-3 py-2">My Office Location</div>
          
          Software developers are the creative, brainstorming masterminds behind
          computer programs of all sorts. While some software developers may
          focus on a specific program or app, others create giant networks or
          underlying systems that help trigger and power other programs.
        </div>
        <div className="sm:w-full md:w-4/12 lg:w-4/12  px-2 py-2 mt-2 ">
          <div className="text-lg mx-3 py-2">SAY HELLOW .....</div>
          <div className="text-sm mx-3 font-serif text-gray-200">
            If you are interest for working with us then just say hi to this
            mail addess--
          </div>
          <div className="text-sm mx-3 font-serif text-gray-200 py-2 mt-2">
            mahasin48776@gmail.com
          </div>
        </div>

        <div className="sm:w-full md:w-4/12 lg:w-4/12  px-2 py-2 mt-2">
          <div className="text-lg mx-3 py-2 ">SUBSCRIBE US</div>
          <div className="w-full md:w-full lg:w-3/12  text-left  flex  py-2">
            <Link to=" " className=" text-white text-md px-3 ">
              <BsFacebook />
            </Link>
            <Link to=" " className=" text-white text-md  px-3">
              <BsInstagram />
            </Link>
            <Link to=" " className=" text-white text-md px-3 ">
              <AiOutlineMail />
            </Link>
          </div>
          <div>
            <input
              type="email"
              className="outline-none bg-transparent text-white border-1px rounded-3xl border-2 border-sky-200 px-3 m-3 py-1 "
            />
          </div>
          <div>
            <button className="outline-none  bg-sky-500 hover:bg-sky-700 text-white border-0 rounded-3xl px-3 ml-4 py-1  ">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-20 bg-dark lg:flex justify-center items-center ">
        <div className="sm:w-full  lg:6/12  px-3 py-2  sm:text-center font-serif">
          <NavLink
            to="/"
            className={
              "w-full text-white  px-2  text-center no-underline rounded-3xl "
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={
              "w-full text-white px-2    text-center no-underline rounded-3xl "
            }
          >
            Service
          </NavLink>
          <NavLink
            to="/empoloyee"
            className={
              "w-full text-white   px-2  text-center no-underline rounded-3xl  "
            }
          >
            Empoloyee
          </NavLink>
          <NavLink
            to="/contact"
            className={
              "w-full text-white   px-2  text-center no-underline rounded-3xl "
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className={
              "w-full text-white   px-2  text-center no-underline rounded-3xl "
            }
          >
            About
          </NavLink>
        </div>
        <div className="sm:w-full  lg:6/12  px-3 py-2 text-white text-center italic">
          @Copyright. all right reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
