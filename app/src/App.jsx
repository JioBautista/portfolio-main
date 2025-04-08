import React from "react";
import NavBar from "./navbar/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="max-w-5xl mx-auto animate__animated animate__fadeIn animate__delay-1s">
      <NavBar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
