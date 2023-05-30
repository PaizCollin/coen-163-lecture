import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav className={styles["header__nav"]}>
        <div className={styles["header__logo"]}>
          <h4 data-aos="fade-down">Resonate</h4>
          <div className={styles["header__logo-overlay"]}></div>
        </div>

        <ul className={styles["header__menu"]}>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/discover">Discover</NavLink>
          </li>
          <li>
            <NavLink to="/sellerss">Sellers</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <div className={styles["button-white"]}>
              <NavLink to="/signup">Sign Up</NavLink>
            </div>
          </li>
        </ul>

        <ul className={styles["header__menu-mobile"]} data-aos="fade-down">
          <li>
            <img
              src="../../../public/menu.svg"
              alt="menu"
              onClick={handleMenuClick}
            />
            {isMobileMenuOpen && (
              <ul className={styles["header__menu-mobile-dropdown"]}>
                <li>
                  <NavLink exact to="/" onClick={handleMenuClick}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/discover" onClick={handleMenuClick}>
                    Discover
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/sellerss" onClick={handleMenuClick}>
                    Sellers
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" onClick={handleMenuClick}>
                    Login
                  </NavLink>
                </li>
                <li>
                  <div className={styles["button-white"]}>
                    <NavLink to="/signup" onClick={handleMenuClick}>
                      Sign Up
                    </NavLink>
                  </div>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
