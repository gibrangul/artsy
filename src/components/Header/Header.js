import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.scss";

const Header = ({ theme, setTheme }) => {
  const { pathname } = useLocation();
  return (
    <div className="flex-row flex-justify-center semi-bold">
      <div className="header">
        <Link to="/" className="logo flex-row flex-align-center mr-auto">
          <h2 className="logo-name">Artsy</h2>
        </Link>

        <div className="nav-list flex-row flex-align-center ">
          <Link
            to="/about"
            className={`${pathname === "/about" && "selected"}`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`${pathname === "/contact" && "selected"}`}
          >
            Contact
          </Link>
          <div className="switch-container mt-2">
            <p className="mr-16">Dark Mode</p>
            <label className="ios-style-switch">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={({ target }) =>
                  target.checked ? setTheme("dark") : setTheme("light")
                }
              />
              <i />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
