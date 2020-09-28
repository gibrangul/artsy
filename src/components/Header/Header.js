import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logoPurple from "../../images/logo-purple-72.png";
import logoWhite from "../../images/logo-white-72.png";
import "./header.scss";

const Header = (props) => {
  const location = useLocation();
  const imageRef = useRef(null);
  console.log(location);
  return (
    <div className="header-container">
      <div className="header">
        <Link
          to="/"
          className="logo"
          onMouseOver={(e) => (imageRef.current.src = logoPurple)}
          onMouseOut={(e) => (imageRef.current.src = logoWhite)}
        >
          <img
            className="logo-image"
            alt="logo"
            src={logoWhite}
            ref={imageRef}
          />
          <h2 className="logo-name">Artsy</h2>
        </Link>
        <div className="header-nav-list">
          <Link
            to="/privacy"
            className={`${location.pathname === "/privacy" ? "selected" : ""}`}
          >
            Privacy
          </Link>
          <Link
            to="/about"
            className={`${location.pathname === "/about" ? "selected" : ""}`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`${location.pathname === "/contact" ? "selected" : ""}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
