import React from "react";
import styles from "../styles/home.module.scss";
import "animate.css";

function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className={`animate__animated animate__fadeIn`}>Hi, I'm Jio!</h1>

      <h1 className={`animate__animated animate__fadeIn`}>
        Welcome to my portfolio
      </h1>
    </div>
  );
}

export default Home;
