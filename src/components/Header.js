import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../stylesheets/_header.scss";

export default function Header() {
  return (
    <div className="header-section">
      <div className="left-header-section">
        <h1 className="quiz-head">Ishav Bhhatt</h1>
      </div>

      <div className="right-header-section">
        <div className="navbar-item">
          <div className="buttons">
            <NavLink
              activeClassName="navbar__link--active"
              exact
              className="navbar_link"
              to="/admins"
            >
              Home
            </NavLink>
            <NavLink
              activeClassName="navbar__link--active"
              className="navbar_link"
              to="/admins/signup"
            >
              Sign up
            </NavLink>
            <NavLink
              activeClassName="navbar__link--active"
              className="navbar_link"
              to="/admins/signin"
            >
              Sign in
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
