import styles from "./Hero.module.css";

function Hero() {
  return (
    <>
      <div className={styles["hero"]}>
        <div className={styles["hero__bg"]}></div>
        <div className={styles["hero__content"]}>
          <h1 className={styles["hero__content-title"]}>
            Digital Recommendations, Physical Records
          </h1>
          <h3 className={styles["hero__content-subtitle"]}>
            Sign in with Spotify or Apple Music to discover records for sale
            nearby Join us today to start selling.
          </h3>
          <div className={styles["hero__content-buttons"]}>
            <div className={styles["button-blue"]}>Explore Records</div>
            <div className={styles["button-white"]}>Start Selling</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
