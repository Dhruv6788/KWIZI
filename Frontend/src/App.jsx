import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Create from "./components/Create";
import Profile from "./components/Profile";
import Reports from "./components/Reports";
import Library from "./components/Library";
import History from "./components/History";
import Explore from "./components/Explore";
import Menu from "./components/Menu";
import Details from "./components/Details";
import Final from "./components/Final";
import FileFormat from "./components/FileFormat";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth0();

  const toggleOpenBar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
    console.log(user)

  }, [user]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {
        <Route path="/dashboard" element={<Dashboard isOpen={isOpen} toggleOpenBar={toggleOpenBar} />}>
          <Route path="explore" element={<Explore />} />

          <Route path="create" element={<Create />}>

            <Route path="quizmenu" element={<Menu />} />
            <Route path="quizdetails" element={<Details />} />
            <Route path="submitquiz" element={<Final />} />
            <Route path="fileformat" element={<FileFormat />} />

          </Route>

          <Route path="profile" element={<Profile />} />

          <Route path="library" element={<Library />} />

          <Route path="class" element={<Library />} />

          <Route path="history" element={<History />} />
          
          <Route path="reports" element={<Reports />} />
        </Route>
      } 
    </Routes>
  );
};

export default App;
