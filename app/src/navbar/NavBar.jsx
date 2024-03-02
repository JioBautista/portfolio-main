import React from "react";
import styles from "./navbar.module.scss";
import { Link } from "react-router-dom";
import "animate.css";

function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link to="/">
          <img src="assets/Color logo - no background.png" />
        </Link>

        <Link to="/about" className={styles.navlinks}>
          About
        </Link>

        <Link to="/project" className={styles.navlinks}>
          Projects
        </Link>

        <Link to="/contact" className={styles.navbtn}>
          Contact
        </Link>

        <img
          src="assets/icons8-menu-50-black.png"
          className={styles.burgericon}
          onClick={() => handleClick()}
        />
        {isOpen && (
          <>
            <div className={`${styles.overlay}`}></div>
            <div
              className={`${styles.sidebar} animate__animated animate__slideInLeft animate__faster`}
            >
              <img
                src="/assets/icons8-close-30.png"
                onClick={() => handleClick()}
              />
              <Link
                to="/about"
                className={styles.sidelinks}
                onClick={() => handleClick()}
              >
                About
              </Link>

              <Link
                to="/project"
                className={styles.sidelinks}
                onClick={() => handleClick()}
              >
                Projects
              </Link>

              <Link
                to="/contact"
                className={`${styles.navbtn} ${styles.display}`}
                onClick={() => handleClick()}
              >
                Contact
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;
