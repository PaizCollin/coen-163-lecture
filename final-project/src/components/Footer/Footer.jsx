import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__links"]}>
        <div className={styles["footer__links-col"]}>
          <h4 className={styles["footer__links-title"]}>Pages</h4>
          <ul className={styles["footer__links-list"]} data-aos="fade-in">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/error">Discover</NavLink>
            </li>
            <li>
              <NavLink to="/sellers">Sellers</NavLink>
            </li>
            <li>
              <NavLink to="/error">Login</NavLink>
            </li>
            <li>
              <NavLink to="/error">Sign Up</NavLink>
            </li>
          </ul>
        </div>

        <div className={styles["footer__links-col"]}>
          <h4 className={styles["footer__links-title"]}>Learn More</h4>
          <ul className={styles["footer__links-list"]} data-aos="fade-in">
            <li>
              <NavLink exact to="/error">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/error">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/error">Become a Seller</NavLink>
            </li>
            <li>
              <NavLink to="/error">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/error">FAQs</NavLink>
            </li>
          </ul>
        </div>

        <div className={styles["footer__links-col"]}>
          <h4 className={styles["footer__links-title"]}>Get Started</h4>
          <ul className={styles["footer__links-list"]} data-aos="fade-in">
            <li>
              <NavLink to="/error">Login</NavLink>
            </li>
            <li>
              <NavLink to="/error">Sign Up</NavLink>
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
