import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../stylesheets/_home.scss";

export default function Home() {
  return (
    <div className="homepage-section">
      <div className="homepage-div">
        <div>
          <h1 className="homepage-name">
            Hi, I'm
            <strong>
              {" "}
              Ishav <br /> Bhatt.{" "}
            </strong>
            A web <br /> Developer
          </h1>
        </div>
      </div>
      <div className="aboutinhomepage-section">
        <div className="aboutinhomepage-boxrow">
          <div className="aboutin-homepagebox1">
            <img src="/images/mypic.jpeg" className="my-image" />
          </div>
          <div className="aboutin-homepagebox2">
            <h1 className="aboutinhomepage-heading">
              A Little about <br></br>Myself.
            </h1>
            <p className="aboutinhomepage-para">
              Hi, I'am a Full-Stack Web Developer. Passionate about creating web
              applications.
            </p>
            <p className="aboutinhomepage-para">
              I started my journey as front end web developer by just learning
              HTML and CSS. After that i got introduced to the Javascript
              programming language. It's totally fun to play with the code,
              design and features etc.
            </p>
            <p className="aboutinhomepage-para">
              I have completed my Full-Stack Web Developer Nanodegree Udacity
              course
              <a className="altcampus" href="https://altcampus.io/">
                {" "}
                @Altcampus
              </a>
            </p>
            <div className="aboutin-homepagebutton-div">
              <Link to="/about" className="about-inhomepage-button">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
