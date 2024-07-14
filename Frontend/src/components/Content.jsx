import React, { useContext, useEffect, useRef } from "react";
import sideImage from "/images/sideImage-1.jpg";
import MyContext from "../context/MyContext";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const Content = ({login}) => {
  var { gradient } = useContext(MyContext);
  const { background, color, bg, hoverBg, hoverColor } = gradient;
  const {loginWithRedirect} = useAuth0()
  const navigateTo = useNavigate();

  return (
    <div className={`w-full ${background} h-[100vh]`}>
      <div className="w-full">
        <div className="flex justify-center">
          {/* childs 1 */}
          <div
            className={`${color} content-left w-full lg:w-1/2  flex justify-center`}
          >
            <div className="font-[CD] font-black px-10 lg:px-5">
              <h1 className="mt-10 text-7xl text-center lg:text-left">
                Plan In Seconds,
              </h1>
              <h1 className="text-7xl text-center lg:text-left">
                not Weekend.
              </h1>
              <h1 className="text-3xl font-light mt-5 text-center lg:w-[70%] lg:text-left">
                Deliver instruction that's relevant for every student
              </h1>
              <div className="w-full relative z-[1] mt-10 flex gap-10 justify-center lg:justify-start">
                <button
                  onClick={() => {
                    navigateTo("/dashboard");
                  }}
                  className={`rounded border border-black ${hoverColor}  uppercase duration-100 ${hoverBg} px-10 py-5`}
                >
                  I want to Try
                </button>

                <button
                  onClick={loginWithRedirect}
                  className={`rounded border border-black ${hoverColor}  uppercase duration-100 ${hoverBg} px-10 py-5`}
                >
                  Sign In Me 
                </button>
              </div>
            </div>
          </div>
          {/* {child2} */}
          <div className="content-right w-[20vw] hidden lg:flex justify-center overflow-hidden">
            <img
              className="w-[100%] object-cover h-[70%] mt-10 rounded-lg"
              src={sideImage}
              alt="Side Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
