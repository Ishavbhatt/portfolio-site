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
            A Little About ​Myself. ​Lorem Ipsum dolor sit amet, consectetur
            adipiscing elit sed do eiusmod tempor inciddunt ut labore et dolore
            magna aliqua aliquip laboris nisi ut aliquip.
          </p>
          <p className="aboutpage-para">
            A Little About ​Myself. ​Lorem Ipsum dolor sit amet, consectetur
            adipiscing elit sed do eiusmod tempor inciddunt ut labore et dolore
            magna aliqua aliquip laboris nisi ut aliquip.
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
