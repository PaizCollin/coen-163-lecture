import { useLocation, useNavigate, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";

function Header({ loggedIn, handleLogout }) {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogoutClick = () => {
    handleLogout();
    const location = useLocation();
    if (location.pathname === "/") {
      window.location.reload(); // Refresh the page if already on the home page
    } else {
      navigate("/");
    }
  };

  console.log(loggedIn);

  return (
    <>
      {loggedIn === false ? (
        <header>
          <nav className={styles["header__nav"]}>
            <div className={styles["header__logo"]}>
              <h4 data-aos="fade-down">
                <NavLink exact to="/">
                  Resonate
                </NavLink>
              </h4>
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
                <div className={styles["button-white"]}>
                  <NavLink to="/signup">Sign Up</NavLink>
                </div>
              </li>
            </ul>

            <ul className={styles["header__menu-mobile"]}>
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
                      <NavLink to="/sellers" onClick={handleMenuClick}>
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
                        <NavLink to="/signup">Sign Up</NavLink>
                      </div>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </header>
      ) : (
        <header>
          <nav className={styles["header__nav"]}>
            <div className={styles["header__logo"]}>
              <h4 data-aos="fade-down">
                <NavLink exact to="/">
                  Resonate
                </NavLink>
              </h4>
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
                <NavLink to="/Account">Account</NavLink>
              </li>
              <li>
                <button
                  onClick={handleLogoutClick}
                  className={styles["button-white"]}
                >
                  Logout
                </button>
              </li>
            </ul>

            <ul className={styles["header__menu-mobile"]}>
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
                      <NavLink to="/sellers" onClick={handleMenuClick}>
                        Sellers
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/account" onClick={handleMenuClick}>
                        Account
                      </NavLink>
                    </li>
                    <li>
                      <button
                        onClick={handleLogoutClick}
                        className={styles["button-white"]}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </header>
      )}
    </>
  );
}

export default Header;
