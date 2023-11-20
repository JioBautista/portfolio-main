import React from "react";
import styles from "../styles/about.module.scss";
import "animate.css";

function About() {
  return (
    <div className={`${styles.wrapper} animate__animated animate__fadeIn`}>
      <p>
        Currently based in <span>Toronto</span>. My current tech stacks are{" "}
        <span>HTML</span>, <span>CSS</span>, <span>Javascript</span>,{" "}
        <span>React</span>. I'm always eager to learn new concepts and have the
        passion to improve my skills as a developer.
      </p>
      <div className={`${styles.icons} `}>
        <img src="/assets/icons8-html.svg" />
        <img src="/assets/icons8-css.svg" />
        <img src="/assets/icons8-javascript.svg" />
        <img src="/assets/icons8-react.svg" />
        <img src="/assets/icons8-sass.svg" />
      </div>
    </div>
  );
}

export default About;
