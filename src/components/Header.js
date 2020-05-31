import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import "../stylesheets/_header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="header-section">
        <div className="left-header-section">
          <h1 className="quiz-head">Ishav Bhatt</h1>
        </div>

        <div className="right-header-section">
          <div className="navbar-item">
            <div className="buttons">
              <NavLink
                activeClassName="navbar__link--active"
                exact
                className="navbar_link"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                activeClassName="navbar__link--active"
                className="navbar_link"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                activeClassName="navbar__link--active"
                className="navbar_link"
                to="/skills"
              >
                Skills
              </NavLink>
              <div class="dropdown">
                <button class="dropbtn">
                  More <BsChevronDown className="dropdown-icon" />
                </button>
                <div class="dropdown-content">
                  <a href="https://www.linkedin.com/in/ishav-bhatt-a3484b192/">
                    Linkedin
                  </a>
                  <a href="https://twitter.com/ishavbhatt143">Twitter</a>
                  <a href="https://github.com/Ishavbhatt">Github</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
