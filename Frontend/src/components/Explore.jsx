import React from "react";

const Explore = () => {
  return (
    <div className="w-full">
      <div className="w-full mt-8 flex justify-center py-1">
        <h1 className="font-[PB] font-bold text-purple-600 text-2xl lg:text-5xl">
          What Will You teach today?
        </h1>
      </div>
      <div className="w-full flex justify-center py-5 px-5 lg:px-10">
        <input
          type="text"
          className="font-[PB] w-full placeholder:capitalize lg:block px-4 py-4 text-slate-600 text-xl placeholder:text-xl  border lg:border-none focus:border-black lg:bg-zinc-100 rounded outline-none "
          placeholder="Search for Quiz on Any Topic"
          spellCheck="false"
        />
      </div>
    </div>
  );
};

export default Explore;
