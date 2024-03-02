import React from "react";
import styles from "../styles/about.module.scss";
import "animate.css";

function About() {
  return (
    <div className={`${styles.wrapper} animate__animated animate__fadeIn`}>
      <p>
        I'm a passionate developer who taught myself the ins and outs of both
        front-end and back-end development. With one year of hands-on experience
        under my belt, I'm constantly learning and pushing myself to grow. I'm
        excited to explore new challenges, collaborate with others, and
        contribute my skills to innovative projects.
      </p>
      <div className={`${styles.icons} `}>
        <img src="/assets/icons8-html.svg" />
        <img src="/assets/icons8-css.svg" />
        <img src="/assets/icons8-javascript.svg" />
        <img src="/assets/icons8-react.svg" />
        <img src="/assets/icons8-sass.svg" />
        <img src="/assets/icons8-python-50.svg" />
        <img src="/assets/icons8-django.svg" />
        <img src="/assets/icons8-postgresql-50.svg" />
      </div>
    </div>
  );
}

export default About;
