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
      </div>
    </Element>
  );
}

export default About;
