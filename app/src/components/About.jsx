import { Element } from "react-scroll";

function About() {
  return (
    <Element name="about">
      <div className="p-5 gap-5 md:flex md:p-8">
        <div className="mb-5">
          <img src="/assets/portrait.JPG" className="rounded-lg" />
        </div>

        <div className="text-center md:text-end">
          <p>
            Hello! I'm a Toronto-based programmer with three years of hands-on
            experience crafting websites and web applications. My foundation
            lies in solid HTML, CSS, and JavaScript, and I've built upon that
            with practical experience in technologies like React, Tailwind CSS,
            Express.js, and PostgreSQL. As a self-taught developer, I'm
            passionate about continuous learning and building impactful digital
            solutions.
          </p>
        </div>

        <div>
          <p className="mb-2 font-bold tracking-tight underline underline-offset-4 text-[#FA003F]">
            Full-Stack
          </p>
          <div className="flex md:flex-col md:gap-0 gap-3 justify-center">
            <p className="tracking-wide">React</p>
            <p className="tracking-wide">Tailwind</p>
            <p className="tracking-wide">Express</p>
            <p className="tracking-wide">PostgresQL</p>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default About;
