import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Signup.module.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSignUpFormSubmit = () => {
    navigate("/login");
  };

  return (
    <div className={styles["login"]}>
      <h1 className={styles["login__title"]}>Sign Up</h1>
      <form className={styles["login__form"]} onSubmit={handleSignUpFormSubmit}>
        <label className={styles["login__label"]}>Username</label>
        <input
          className={styles["login__input"]}
          type="text"
          value={username}
          onChange={handleUsernameChange}
          required
        />
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
        <button type="submit" className={styles["button-blue"]}>
          Sign Up
        </button>
      </form>
      <h3>Or</h3>

      <div className={styles["login__platform"]}>
        <h4>Join with your music platform</h4>
        <div className={styles["login__platforms"]}>
          <img src="../../../public/spotify.png" alt="spotify" />
          <img src="../../../public/apple.png" alt="apple music" />
        </div>
      </div>
      <h4 className={styles["login__signup"]}>
        Already have an account?{" "}
        <Link to={"/login"}>
          <u>Login</u>
        </Link>
      </h4>
    </div>
  );
};

export default SignUp;
