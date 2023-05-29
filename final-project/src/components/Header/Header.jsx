import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <nav className={styles["header__nav"]}>
        <div className={styles["header__logo"]}>
          <h4 data-aos="fade-down">Resonate</h4>
          <div className={styles["header__logo-overlay"]}></div>
        </div>

        <ul className={styles["header__menu"]} data-aos="fade-down">
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

        <ul className={styles["header__menu-mobile"]} data-aos="fade-down">
          <li>{/* <img src="assets/menu.svg" alt="menu" /> */}</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
