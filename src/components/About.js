import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../stylesheets/_about.scss";
import Header from "../components/Header";

export default function About() {
  return (
    <div className="aboutpage-div">
      <div className="aboutpage-section">
        <h1 className="aboutpage-head">About Me.</h1>
      </div>
      <div className="aboutpage-boxrow">
        <div className="aboutpagebox1">
          <img src="/images/mypic.jpeg" className="my-image-aboutpage" />
        </div>
        <div className="aboutpagebox2">
          <h1 className="aboutpage-heading">
            A Little about <br></br>Myself.
          </h1>
          <p className="aboutpage-para">
            Hi, I'am a Full-Stack Web Developer. Passionate about creating web
            applications. I started my journey as front end web developer by
            just learning HTML and CSS. After that i got introduced to the
            Javascript programming language. It's totally fun to play with the
            code, design and features etc.
          </p>
          <h1 className="aboutpage-heading">Experience / Skills</h1>
          <p className="aboutpage-para">
            Web Design + Web Development + Product Design
          </p>
          <div className="aboutbutton-div">
            <Link to="/skills" className="about-button">
              VIEW MY SKILLS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
