import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__links"]}>
        <div className={styles["footer__links-col"]}>
          <h4 className={styles["footer__links-title"]}>Pages</h4>
          <ul className={styles["footer__links-list"]} data-aos="fade-down">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/discover">Discover</NavLink>
            </li>
            <li>
              <NavLink to="/sellers">Sellers</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
          </ul>
        </div>

        <div className={styles["footer__links-col"]}>
          <h4 className={styles["footer__links-title"]}>Learn More</h4>
          <ul className={styles["footer__links-list"]} data-aos="fade-down">
            <li>
              <NavLink exact to="/">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/">Become a Seller</NavLink>
            </li>
            <li>
              <NavLink to="/">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/">FAQs</NavLink>
            </li>
          </ul>
        </div>

        <div className={styles["footer__links-col"]}>
          <h4 className={styles["footer__links-title"]}>Get Started</h4>
          <ul className={styles["footer__links-list"]} data-aos="fade-down">
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <ul className={styles["footer__socials"]}>
        <li>
          <img src="../../../public/facebook.svg" alt="facebook" />
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src="../../../public/instagram.svg" alt="instagram" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img src="../../../public/twitter.svg" alt="twitter" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
