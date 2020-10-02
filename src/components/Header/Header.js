import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logoPurple from "../../images/logo-purple-72.png";
import logoWhite from "../../images/logo-white-72.png";
import logoDark from "../../images/logo-dark-72.png";
import "./header.scss";

const Header = ({ theme, setTheme }) => {
  const location = useLocation();
  const imageRef = useRef(null);
  return (
    <div className="header-container">
      <div className="header">
        <Link
          to="/"
          className="logo"
          onMouseOver={(e) => (imageRef.current.src = logoPurple)}
          onMouseOut={(e) =>
            (imageRef.current.src = theme === "dark" ? logoWhite : logoDark)
          }
        >
          <img
            className="logo-image"
            alt="logo"
            src={theme === "dark" ? logoWhite : logoDark}
            ref={imageRef}
          />
          <h2 className="logo-name">Artsy</h2>
        </Link>

        <div className="header-nav-list">
          <div className="switch-container mt-2">
            <p className="semi-bold mr-16">Dark Mode</p>
            <label class="ios-style-switch">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={({ target }) => {
                  if (target.checked) {
                    setTheme("dark");
                  } else {
                    setTheme("light");
                  }
                }}
              />
              <i></i>
            </label>
          </div>
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
