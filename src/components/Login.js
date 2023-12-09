import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

function Login({ onLogin, onRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin({ username, password });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    onRegister({ username, password });
  };

  return (
    <div className="login-container">
      {isLogin ? (
        <form className="login-form" onSubmit={handleSubmit}>
          {isLogin ? <h1>Login</h1> : <h1>Register</h1>}

          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-button">
            Login
          </button>
          <p>
            Don't have an account?{" "}
            <Link onClick={handleForm} style={{ color: "purple" }}>
              Registe Here
            </Link>
          </p>
        </form>
      ) : (
        <form className="login-form" onSubmit={handleRegister}>
          <h1>Login</h1>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-button">
            Login
          </button>
          <p>
            Have an account?{" "}
            <Link onClick={handleForm} style={{ color: "purple" }}>
              Login Here
            </Link>
          </p>
        </form>
      )}
    </div>
  );
}

export default Login;
