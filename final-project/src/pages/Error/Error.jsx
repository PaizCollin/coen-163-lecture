import React from 'react';
import styles from "./Error.module.css";
import { Link } from 'react-router-dom';


function Error() {
    return (
    <>
      <div className={styles["hero"]}>
        <div className={styles["hero__bg"]}></div>
        <div className={styles["hero__content"]}>
          <h1 className={styles["hero__content-title"]}>
            That page doesn't exist!
          </h1>
          
          <h3 className={styles["hero__content-subtitle"]} >
            Sorry, the page you were looking for could not be found.
          </h3>
          
          <h3 className={styles["hero__content-subtitle2"]} >
            <Link to="/">Return home here</Link>.
          </h3>
          

        </div>
      </div>
    </>
    );
}

export default Error;
