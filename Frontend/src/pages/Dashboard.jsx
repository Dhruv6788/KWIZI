import React from "react";
import Sidebar from "../components/Sidebar";
import Header from '../components/Header'

const Dashboard = ({toggleOpenBar, isOpen}) => {
  return (
    <>
      <div className="w-screen h-screen">
        <div className="flex w-full h-full">
          <Sidebar isOpen={isOpen} toggleOpenBar={toggleOpenBar} />
          <Header toggleOpenBar={toggleOpenBar}  />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
