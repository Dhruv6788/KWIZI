import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Create = () => {
  return (
    <div className="w-full">
      <div className="w-full mt-3 flex items-start flex-col py-4 border-purple-400">
        <h1 className="font-[PB] ml-3 font-bold text-2xl lg:text-5xl text-black">
          <i className="ri-add-box-fill"></i> Create New Quiz
        </h1>

        <div className="w-full  flex justify-start ml-3 gap-5 lg:gap-10 text-lg mt-5 pb-5 font-[PB]">
          <NavLink
            to="fileformat"
            className={`flex items-center py-2 px-3 rounded-md `}
            style={(e) => {
              return {
                fontWeight: e.isActive && "900",
                fontSize: e.isActive && "20px",
                color: e.isActive && "#fff",
                background: e.isActive && "rgb(147 51 234)",
              };
            }}
          >
            <i className="ri-check-double-fill"></i> &nbsp; Format
          </NavLink>

          <NavLink
            to="/dashboard/create/quizmenu"
            className="flex items-center py-2 px-3 rounded-md "
            style={(e) => {
              return {
                fontWeight: e.isActive && "900",
                fontSize: e.isActive && "20px",
                color: e.isActive && "#fff",
                background: e.isActive && "rgb(147 51 234)",
              };
            }}
          >
            <i className="ri-add-circle-fill"></i> &nbsp; Config
          </NavLink>
          <NavLink
            to="quizdetails"
            className="flex items-center py-2 px-3 rounded-md "
            style={(e) => {
              return {
                fontWeight: e.isActive && "900",
                fontSize: e.isActive && "20px",
                color: e.isActive && "#fff",
                background: e.isActive && "rgb(147 51 234)",
              };
            }}
          >
            <i className="ri-file-add-fill"></i> &nbsp; Upload
          </NavLink>

          <NavLink
            to="allquiz"
            className="flex items-center py-2 px-3 rounded-md "
            style={(e) => {
              return {
                fontWeight: e.isActive && "900",
                fontSize: e.isActive && "20px",
                color: e.isActive && "#fff",
                background: e.isActive && "rgb(147 51 234)",
              };
            }}
          >
            <i class="ri-gallery-view-2"></i> &nbsp; All
          </NavLink>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Create;
