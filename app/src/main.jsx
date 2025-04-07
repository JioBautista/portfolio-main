import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Header />,
      },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <RouterProvider router={router} />
    </>
  </React.StrictMode>
);
