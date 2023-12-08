import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  const { onLogout, authenticated } = props;
  return (
    <header className="header">
      <img src="ShapeShiftLogo.png" alt="ShapeShift Logo" />
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/workouts">Workouts</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/nutrition">Nutrition</Link>
        <Link to="/products">Products</Link>
        {!authenticated ? (
          <Link to="/login" className="btn-login">
            Login
          </Link>
        ) : (
          <Link onClick={onLogout} className="btn-login">
            Logout
          </Link>
        )}
      </nav>

      {/* <div className="action-buttons">
                <button className="free-trial-button">Free Trial</button>
            </div> */}
    </header>
  );
}

export default Header;
