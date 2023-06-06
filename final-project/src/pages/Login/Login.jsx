import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = ({ handleLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginFormSubmit = () => {
    handleLogin();
    navigate("/");
  };

  return (
    <div className={styles["login"]}>
      <h1 className={styles["login__title"]}>Login</h1>
      <form className={styles["login__form"]} onSubmit={handleLoginFormSubmit}>
        <label className={styles["login__label"]}>Email</label>
        <input
          className={styles["login__input"]}
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <label className={styles["login__label"]}>Password</label>
        <input
          className={styles["login__input"]}
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit" to="/" className={styles["button-blue"]}>
          Login
        </button>
      </form>
      <h3>Or</h3>

      <div className={styles["login__platform"]}>
        <h4>Login with your music platform</h4>
        <div className={styles["login__platforms"]}>
          <img src="../../../public/spotify.png" alt="spotify" />
          <img src="../../../public/apple.png" alt="apple music" />
        </div>
      </div>
      <h4 className={styles["login__signup"]}>
        Don't have an account?{" "}
        <Link to={"/signup"}>
          <u>Sign Up</u>
        </Link>
      </h4>
    </div>
  );
};

export default Login;
