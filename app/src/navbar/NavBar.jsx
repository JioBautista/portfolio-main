import React from "react";
import { Link } from "react-scroll";
import { Element } from "react-scroll";

function NavBar() {
  return (
    <Element name="navbar">
      <div className="p-5 flex items-center justify-between md:p-8 gap-3 bg-white">
        <h1 className="font-bold tracking-wide grow">Jio Bautista</h1>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          About
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          Contact
        </Link>
      </div>
    </Element>
  );
}

export default NavBar;
