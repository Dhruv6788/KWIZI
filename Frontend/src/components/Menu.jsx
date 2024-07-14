import React, { useContext, useState } from "react";
import excel from "/images/excel.png";
import MyContext from "../context/MyContext";

const Menu = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { quizId, setquizId } = useContext(MyContext);
  const [isUploaded, setisUploaded] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const configFileSubmit = async () => {
    if (!selectedFile) {
      console.log("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("configFile", selectedFile);

    try {
      const response = await fetch("http://localhost:3000/uploadConfig", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      console.log(result);
      setquizId(result.quizId);
      setisUploaded(
        "Uploaded" + '<i className="ri-check-double-fill text-green-300"></i>'
      );
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div>
      <div className="w-full z-[12]">
        <form
          className="w-full"
          onSubmit={(e) => {
            e.preventDefault();
            configFileSubmit();
          }}
        >
          <label
            htmlFor="configFile"
            className="w-full border-t border-zinc-300 font-[PB] flex justify-start"
          >
            <div className="w-[25%] rounded-xl py-4 ">
              <div className="w-full flex justify-center py-3">
                <h1 className="text-2xl">Upload Configuration File</h1>
              </div>
              <div className="w-full px-5">
                <div className="w-full h-[27vh] border-purple-400 border border-dashed flex justify-center items-center rounded">
                  <img src={excel} className="w-[30%]" alt="Excel Icon" />
                </div>
                <div className="w-full mt-2">
                  <p className="text-center">
                    <span className="text-purple-600 font-black">Note:</span>{" "}
                    Only Excel files are allowed for Configuration
                  </p>
                </div>
              </div>
              <input
                type="file"
                name="configFile"
                id="configFile"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </label>

          <div className="w-full flex justify-start mt-5 ml-4">
            <button
              type="submit"
              className="px-2 py-3 w-[23%] bg-purple-600 text-green-200 rounded-lg hover:bg-purple-500 hover:text-white"
            >
              {isUploaded ? (
                <span>
                  Uploaded{" "}
                  <i className="ri-check-double-fill text-green-300"></i>
                </span>
              ) : 'Upload'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Menu;
