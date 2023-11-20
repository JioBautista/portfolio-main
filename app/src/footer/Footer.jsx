import React from "react";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.links}>
        <img src="src/assets/Jio Bautista-logos_white.png" />
        <p>About</p>
        <p>Projects</p>
      </div> */}

      {/* <div className={styles.icons}>
        <img src="/assets/icons8-github.svg" />
        <img src="/assets/icons8-linkedin.svg" />
        <img src="/assets/icons8-instagram.svg" />
      </div> */}

      {/* <button>Lets Chat!</button> */}
      <p className={styles.copyright}>© 2023 JioBautista</p>
    </div>
  );
}
export default Footer;
