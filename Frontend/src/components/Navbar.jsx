import React, { useContext, useEffect } from "react";
import MyContext from "../context/MyContext";

const Navbar = ({login}) => {
  const { gradient, setGradient } = useContext(MyContext);
  const { background, color, bg, hoverBg, hoverColor } = gradient;

  const colorArray = [
    {
      background: "bg-gradient-to-r from-blue-500 to-green-500",
      color: "black",
      hoverColor: "hover:text-white",
      hoverBg: "hover:bg-black",
      bg: "hover:text-white",
    },
    {
      background: "bg-white",
      color: "text-black",
      hoverColor: "hover:text-black",
      bg: "hover:bg-white",
      hoverBg: "hover:bg-green-200",
    },
    {
      background: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
      color: "text-white",
      hoverColor: "hover:text-white",
      bg: "hover:bg-white",
      hoverBg: "hover:bg-black",
    },
  ];

  const navLinks = [
    {
      sectionName: "About",
      sectionlink: "/",
    },
    {
      sectionName: "How It Works?",
      sectionlink: "/",
    },
    {
      sectionName: "Contact",
      sectionlink: "/",
    },
    {
      sectionName: "Feedback",
      sectionlink: "/",
    },
  ];

  return (
    <div className={`navbar w-full select-none px-5 py-6 ${background}`}>
      <div className="w-full flex items-center justify-between">
        <div className="h-full flex items-center logo-container w-[30%]">
          <h1
            translate="no"
            className="text-3xl text-black font-[mono] tracking-wider font-bold cursor-pointer"
          >
            KWIZI
          </h1>
        </div>

        <div className="h-full flex justify-center items-center logo-container  w-[30%]">
          <button
            onClick={() => {
              setGradient(
                colorArray[Math.floor(Math.random() * colorArray.length)]
              );
            }}
            className={`text-sm ${hoverBg} ${color} ${hoverColor}  py-2 px-4 mr-7 lg:mr-0 font-[mono] font-light tracking-wider cursor-pointer`}
          >
            Change Mood
          </button>
        </div>

        <div className="w-[30%] lg:flex items-center justify-end hidden gap-4 font-[CD] font-black text-xl">
          {navLinks.map((item, index) => (
            <p key={index}
              className={`text-[15px] px-3 py-2 flex-shrink-0 relative ${hoverColor} ${hoverBg} after:absolute after:left-0 after:bottom-0 after:bg-gray-400 after:w-[0%] after:h-[2px] after:ease-in-out hover:after:w-[100%] after:transition-all`}
            >
              {item.sectionName}
            </p>
          ))}
        </div>

        <div className="flex items-center gap-5 lg:hidden font-[CD]">
          <button
            className={`${gradient} shadow hover:shadow-black px-4 py-2 rounded cursor-pointer`}
          >
            <span className="font-[mono]">Join Us</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
