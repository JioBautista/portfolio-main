import React from "react";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className="px-5 py-10 flex justify-between items-end">
      <div>
        <h1 className="font-bold tracking-wide grow">Jio Bautista</h1>
        <p className="font-bold">Contact:</p>
        <p className="text-gray-500">pachojio@gmail.com</p>
        <p className="font-bold">Github:</p>
        <p className="text-gray-500">github.com/JioBautista</p>
      </div>

      <div>
        <Link
          to="navbar"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          Back to Top
        </Link>
      </div>
    </div>
  );
}

export default Footer;
