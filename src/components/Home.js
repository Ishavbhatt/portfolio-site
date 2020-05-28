import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../stylesheets/_home.scss";

export default function Header() {
  return (
    <div className="homepage-section">
      <div className="homepage-div">
        <div>
          <h1 className="homepage-name">
            Hi, I'm <bold>Ishav Bhatt</bold>.<br></br> A web developer
          </h1>
        </div>
      </div>
      <div className="next-section">
        <div>
          <img src="/images/check.jpg" />
        </div>
        <div>
          <h1>A little bit about my self </h1>
        </div>
      </div>
    </div>
  );
}
