import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import NavBar from "./navbar/NavBar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {/* <NavBar /> */}
        <Home />
        <About />
        <Project />
        <Contact />
      </ThemeProvider>
    </>
  );
}

export default App;
