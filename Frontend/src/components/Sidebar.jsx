import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Sidebar = ({ toggleOpenBar, isOpen }) => {

  const {logout} = useAuth0()
  const navLinks = [
    {
      sectionName: "Explore",
      sectionlink: "explore",
      icon: <i className="ri-map-fill"></i>,
    },
    {
      sectionName: "Create",
      sectionlink: "create/fileformat",
      icon: <i className="ri-add-box-fill"></i>,
    },
    {
      sectionName: "Profile",
      sectionlink: "profile",
      icon: <i className="ri-profile-fill"></i>,
    },
    {
      sectionName: "My Library",
      sectionlink: "library",
      icon: <i className="ri-book-shelf-fill"></i>,
    },
    {
      sectionName: "Class",
      sectionlink: "class",
      icon: <i className="ri-book-shelf-fill"></i>,
    },
    {
      sectionName: "History",
      sectionlink: "history",
      icon: <i className="ri-history-line"></i>,
    },
    {
      sectionName: "Reports",
      sectionlink: "reports",
      icon: <i className="ri-database-fill"></i>,
    },
  ];

  return (
    <div
      className={`lg:w-[17%] duration-300 fixed w-[70%] backdrop-blur-md lg:static ${
        isOpen ? "translate-x-0" : "translate-x-[-120%]"
      } bg-white  z-[20] lg:translate-x-0 h-full  lg:block border-r border-slate-300 font-[PB]`}
    >
      <div
        onClick={() => {toggleOpenBar()}}
        className="lg:hidden absolute top-[7%] z-[20] lg:right-[-5%] right-[-7%] rounded-full w-[10vw] h-[10vw] lg:w-[2vw] lg:h-[2vw] flex justify-center items-center overflow-hidden bg-zinc-200"
      >
        <i className="ri-arrow-left-s-line"></i>
      </div>
      <div className="w-full relative flex justify-center h-20  items-center bg-purple-600 border-b border-zinc-300 ">
        <h1
          translate="no"
          className="text-3xl text-white font-[mono] tracking-wider font-bold cursor-pointer"
        >
          KWIZI
        </h1>
      </div>
      <div className="nav border-b-2 border-slate-200">
        {navLinks.map((item, index) => (
          <NavLink
            onClick={toggleOpenBar}
            to={item.sectionlink}
            key={index}
            className={`w-full flex-shrink-0 py-4 px-6 cursor-pointer hover:bg-purple-50 flex items-center gap-5 text-lg`}
            style={(e) => {
              return {
                background: e.isActive && "rgb(147 51 234)",
                fontWeight: e.isActive && "900",
                fontSize: e.isActive && "20px",
                color: e.isActive && "white",
              };
            }}
          >
            {item.icon}
            <h1 className="tracking-widest">{item.sectionName}</h1>
          </NavLink>
        ))}
      </div>

      <NavLink className="w-full px-6 py-4 cursor-pointer hover:bg-purple-50 flex items-center gap-5 text-xl" onClick={logout}>
        <i className="ri-logout-box-fill"></i>
        <h1 className="tracking-widest">Logout</h1>
      </NavLink>
    </div>
  );
};

export default Sidebar;
