import React from "react";
import NavBar from "./navbar/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="max-w-4xl mx-auto animate__animated animate__fadeIn animate__delay-1s">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
