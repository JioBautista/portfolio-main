import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="p-5 flex items-center justify-between md:p-8 md:gap-3 bg-white">
      <h1 className="font-bold tracking-wide grow">Jio Bautista</h1>

      <h3 className="bg-black text-white p-2 rounded-lg">
        <Link to={"/contact"} reloadDocument>
          Contact
        </Link>
      </h3>
    </div>
  );
}

export default NavBar;
