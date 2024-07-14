import React, { createContext, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// Create a new context
const MyContext = createContext();

export const GradientProvider = ({ children }) => {
  const [gradient, setGradient] = useState({
    background: "bg-gradient-to-r from-blue-500 to-green-500",
    color: "text-black",
    hoverColor: "hover:text-white",
    hoverBg: "hover:bg-black",
    bg: "hover:text-white",
  });

  const [dashboardTheme, setdashboardTheme] = useState({ 
    textColor : "text-white", 
    background : "text-purple-500", 
    textOnHover : "text-white",
    bgOnHover : ""
  })

  const [quizId, setquizId] = useState(null)

  return (
    <MyContext.Provider value={{ gradient, setGradient, dashboardTheme, setdashboardTheme, quizId, setquizId }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;