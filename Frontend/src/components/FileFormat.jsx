import React from "react";
import Card from "./Card";


const FileFormat = () => {
  return (
    <div className="w-full font-[PB]">
      <h1 className="text-4xl text-black text-center capitalize font-semibold">Necessary Files Needed to create new Quiz</h1>
      <div className="w-full flex flex-col items-center pb-10">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default FileFormat;
