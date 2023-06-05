import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <div className="login-container">
        <h1 className="login-heading">Login</h1>
        <div className="login-form-container">
          <div className="login-form">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                className="input-field"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                className="input-field"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <Link to="/" className="login-button">
              Login
            </Link>
            <p>
              Don't have an account? <Link to="/signup">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
