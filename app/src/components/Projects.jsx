import React from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";

function Projects() {
  return (
    <Element name="projects">
      <div className="p-5 md:p-8 text-center md:text-left">
        <div>
          <h1 className="text-4xl font-bold">Portfolio Projects</h1>

          {/* First Project */}
          <div className="p-5">
            <h2 className="text-xl md:text-2xl font-bold">
              Audiophile E-Commerce Website
            </h2>
            <h3 className="mb-5 text-gray-500">
              React &#8226; Tailwind &#8226; ExpressJs &#8226; PostgreSQL
            </h3>
            <p className="mb-3 md:mb-0">
              Currently under development, this e-commerce website is being
              built using a modern tech stack including React for a dynamic user
              interface and Tailwind CSS for efficient styling. The backend is
              powered by Express.js, seamlessly connected to a PostgreSQL
              database. Core functionalities currently implemented include a
              fully functional shopping cart and checkout process. Future
              enhancements planned include email notifications upon successful
              checkout, user wishlists, secure login/signup functionality, and
              optimizations for performance and security.
            </p>

            <div className="flex justify-center gap-3 md:justify-end">
              <Link
                to={
                  "https://github.com/JioBautista/audiophile-ecommerce-website"
                }
                className="underline italic"
              >
                Link to Github
              </Link>
              <Link
                to={"https://audiophile-ecommerce-jio.vercel.app/"}
                className="underline italic"
              >
                Link to Project
              </Link>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-bold">Personal Projects</h1>

          <div>
            <div className="p-5">
              <h2 className="text-xl md:text-2xl font-bold">
                Drinking Game App
              </h2>
              <h3 className="mb-5 text-gray-500">Concept</h3>
              <p>
                Introducing a new drinking game app designed to spark laughter
                and a bit of playful suspicion. The core mechanic is simple yet
                engaging: at the start of each round, every player receives a
                randomly assigned flag, visible only to them – it's either red
                or green. The goal is to deduce which of your friends is the
                "red flag," leading to hilarious accusations and, of course,
                drinks! This app will be developed using React for a dynamic
                front-end, styled with Tailwind CSS for a clean and responsive
                design. The backend will be powered by Express.js, with
                WebSockets integrated to ensure seamless real-time updates and a
                truly interactive gaming experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Projects;
