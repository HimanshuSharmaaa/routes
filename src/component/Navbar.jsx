import React, { useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <div className="Navbar-container">
      <div className="nav-logo">
        <img src="https://logowik.com/content/uploads/images/starbucks-coffee4647.jpg" style={{ width: "120px" }} />
      </div>
      <div className="nav-menu-container">
        <ul className="nav-menu">
          <Link
            className={`nav-links ${location.pathname === "/" ? "active" : ""}`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`nav-links ${location.pathname === "/about" ? "active" : ""}`}
            to="/about"
          >
            About
          </Link>
          <Link
            className={`nav-links ${location.pathname === "/contact" ? "active" : ""}`}
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className={`nav-links ${location.pathname === "/github" ? "active" : ""}`}
            to="/github"
          >
            GitHub
          </Link>
        </ul>
      </div>

      <div className="nav-login-container">
        <button className="login-btn">Login</button>
      </div>
    </div>
  );
};

export default Navbar;