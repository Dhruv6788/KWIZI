import React, { useEffect } from "react";
import avatar from "/images/avatar-male.jpg";

const Topheader = ({toggleOpenBar}) => {
 
  
  return (
    <div className="w-full lg:px-8 px-3 h-20 py-3 gap-5 flex justify-between items-center font-[PB] bg-purple-600 border-b border-zinc-200">

      <div  onClick={()=>{toggleOpenBar()}} className="h-full flex items-center justify-center lg:hidden">
        <i className="ri-menu-line text-2xl text-white"></i>
      </div>

      <div className=" flex justify-center lg:hidden">
        <h1
          translate="no"
          className="lg:hidden text-3xl text-white font-[mono] tracking-wider font-bold cursor-pointer"
        >
          KWIZI
        </h1>
      </div>

      <div className="lg:flex items-center gap-5   w-[70%] hidden ">
        <input
          type="text"
          className="bg-transparent text-white w-full hidden lg:block px-2 py-2 text-lg placeholder:text-lg placeholder:text-white  border rounded-lg outline-none "
          placeholder="Search Anything"
        />
        <div className="h-full"><i className="ri-close-large-line text-2xl text-white"></i></div>
      </div>

      <div className="flex lg:gap-8 gap-5 items-center justify-end h-full">
        <div className="w-[30px] rounded-full h-[30px] bg-red-500 overflow-hidden">
          <img src={avatar} alt="" />
        </div>

        <div className="w-[30px] rounded-full h-[30px] lg:flex justify-center items-center hidden">
          <i className="ri-notification-fill text-2xl text-white"></i>
        </div>

        <div className="w-[30px] rounded-full h-[30px] hidden lg:flex">
          <i className="ri-logout-box-fill text-2xl text-white"></i>
        </div>
      </div>
    </div>
  );
};

export default Topheader;
