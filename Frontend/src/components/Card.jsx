import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="w-[94%] border border-black mt-10  rounded-xl overflow-hidden shadow-slate-200 shadow-2xl">
      <div className="w-full font-bold bg-purple-600 border-b border-black flex items-center px-3">
        <h1 className="font-bold text-lg lg:text-lg text-white py-2 flex gap-2 items-center">
          Specific Student List For the Quiz -{" "}
          <Link className="text-green-300 underline">Download</Link>
        </h1>
      </div>
      <div className="w-full px-4 py-4 text-justify lg:list-decimal list-none duration-1000 hover:bg-purple-100">
        <p className="text-lg font-black text-purple-600"><i className="ri-sticky-note-fill text-purple-600"></i> Note :</p>
        <li className="text-lg mt-2 font-bold">
          The above file will be needed whene you have to create a quiz for
          specific users.
        </li>
        <li className="text-lg mt-5 font-bold">
          Please Make sure all the Field Name should not be modified.
        </li>
        <li className="text-lg mt-5 font-bold">
          Do not include any other field or unneccessary information.
        </li>
        <li className="text-lg mt-5 font-bold">
          Make sure all the Information is Correct according to format otherwise
          you will face some issues and quiz will not genrated.
        </li>
      </div>
    </div>
  );
};

export default Card;
