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
              A Little About ​Myself. ​Lorem Ipsum dolor sit amet, consectetur
              adipiscing elit sed do eiusmod tempor inciddunt ut labore et
              dolore magna aliqua aliquip laboris nisi ut aliquip.
            </p>
            <p className="aboutinhomepage-para">
              A Little About ​Myself. ​Lorem Ipsum dolor sit amet, consectetur
              adipiscing elit sed do eiusmod tempor inciddunt ut labore et
              dolore magna aliqua aliquip laboris nisi ut aliquip.
            </p>
            <div className="aboutbutton-div">
              <Link to="/about" className="about-button">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
