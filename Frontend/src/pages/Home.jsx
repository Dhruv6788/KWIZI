import React from "react";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import MyContext from "../context/MyContext";

const Home = ({login}) => {
  
  return (
      <div className="w-screen duration-500 bg-[#ffffff]">
        <div className="sticky top-0 z-[2]">
          <Navbar />
        </div>
        <Content  login={login} />
      </div>
  );
};

export default Home;
