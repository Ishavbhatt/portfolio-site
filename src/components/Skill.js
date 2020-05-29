import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../stylesheets/_skill.scss";

export default function Skill() {
  return (
    <div className="skillpage-div">
      <div className="skillpage-section">
        <h1 className="skillpage-heading">My Skills.</h1>
      </div>
      <div className="information-section">
        <div className="info-image-div">
          <img src="/images/mypic.jpeg" className="info-image" />
        </div>
        <div>
          <h1 className="info-name">Ishav bhatt</h1>
          <p className="info-bio">A Web Developer</p>
        </div>
      </div>
      <div className="skillpage-row1boxes">
        <div className="skillpage-row1box box1">
          <h1 className="first-skill">Languages</h1>
          <ol type="1">
            <li className="has-text-weight-medium	">Html 5</li>
            <li className="has-text-weight-medium	">Css 3</li>
            <li className="has-text-weight-medium	">JavaScript</li>
          </ol>
        </div>
        <div className="skillpage-row1box box2"></div>
        <div className="skillpage-row1box box3"></div>
      </div>
      <div className="skillpage-row2boxes">
        <div className="skillpage-row2box box1"></div>
        <div className="skillpage-row2box box2"></div>
        <div className="skillpage-row2box box3"></div>
      </div>
    </div>
  );
}
