import React from "react";
import styles from "./Popup.module.css";
import { NavLink } from "react-router-dom";

const Popup = ({ onClose }) => {
  return (
    <div className={styles["popup"]} data-aos="fade-in">
      <div className={styles["content"]} data-aos="zoom-in">
        <h2>Welcome to Resonate!</h2>
        <p>
          Resonate is a online web application that locates{" "}
          <b>nearby music stores </b>
          based on your personal music preferences. Whether you're a vinyl
          collector or a die-hard CD fan,{" "}
          <b>
            Resonate will help you find the best music stores in your area
          </b>{" "}
          that have the musical media you enjoy!
        </p>
        <p>
          Sign up today and link your <b>Spotify or Apple Music</b> account to
          start locating stores with the physical music media you love!
        </p>
        <div className={styles["buttons"]}>
          <button className={styles["button-blue"]} onClick={onClose}>
            Close
          </button>
          <button className={styles["button-white-border"]}>
            <NavLink to="/signup">Sign Up</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
