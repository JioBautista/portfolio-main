import React from "react";

function Header() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-end md:text-left text-center md:p-8 md:bg-no-repeat md:bg-cover md:bg-top md:rounded-lg md:bg-[url(/assets/background-image.JPG)]">
        <div className="md:text-shadow-lg md:text-white text-[50px] md:text-[160px]/35 font-bold tracking-tight">
          <h2>Web Developer</h2>
        </div>

        <div>
          <p className="mb-2 font-bold tracking-tight underline underline-offset-4 text-[#FA003F]">
            Full-Stack
          </p>
          <div className="md:text-white flex md:flex-col md:gap-0 gap-3 justify-center">
            <p className="tracking-wide">React</p>
            <p className="tracking-wide">Tailwind</p>
            <p className="tracking-wide">Express</p>
            <p className="tracking-wide">PostgresQL</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
