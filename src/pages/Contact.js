import React from "react";
import contact from "../photos/contact.jpg";
import {AiOutlineSend} from 'react-icons/ai'
const Contact = () => {
  return (
    <>
    <div className="bg-[#162726] text-white" >

    
    <div className="sm:d-block md:flex lg:flex w-full p-4   justify-between items-center text-center">
      <div className="sm:w-full md:w-6/12 lg:w-6/12">
        <img src={contact} alt="img" className="w-full rounded-lg" />
      </div>
      <div className="sm:w-full md:w-6/12 lg:w-6/12 font-mono text-center">
      
        <h4 className="px-2 py-3">Our Officeal Email Convertion place here<span className="text-red-800">🖨</span> </h4>
        <div className="pb-3 ">
          <input
            type="email"
            placeholder="Your Email"
            className="w-[350px] py-[7px] rounded-3xl text-center border-[#568f8b] bg-transparent border-2 outline-none"
          />
        </div>
        <textarea
          placeholder="Your message"
          className="w-[350px] py-8 text-center rounded-3xl bg-transparent  border-[#568f8b] border-2 outline-none"
        />
        <div className="py-2 ">
          <button className="  px-8 py-2   border-[#568f8b] border-2 rounded-md hover:bg-sky-600 focus:bg-sky-800 text-white">
           <AiOutlineSend  className="text-xl" />  
          </button>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Contact;
