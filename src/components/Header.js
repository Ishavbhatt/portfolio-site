import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-section">
      <div className="left-header-section">
        <h1 className="ishav-bhatt">Ishav Bhatt</h1>
      </div>
      <div className="right-header-section">
        <Link
          activeClassName="navbar__link--active"
          exact
          className="navbar_link"
          to="/"
        >
          Home
        </Link>

        <Link
          activeClassName="navbar__link--active"
          className="navbar_link"
          to="/admins"
        >
          About
        </Link>
        <Link
          activeClassName="navbar__link--active"
          className="navbar_link"
          to="/admins"
        >
          Work
        </Link>
      </div>
    </div>
  );
}
