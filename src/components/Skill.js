import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../stylesheets/_skill.scss";

const numbers = ["one", "two", "three"];

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
      {/* <div className="skillpage-row1boxes"> */}
      <section className="skillpage-row1boxes">
        <div className="skillpage-row1box box1">
          <h1 className="first-skill">Languages</h1>
          <li className="allskills-child first-language">HTML 5</li>
          <hr width="200" size="1"></hr>
          <li className="allskills-child secound-language">CSS 3</li>
          <hr width="200" size="1"></hr>
          <li className="allskills-child third-language">JavaScript</li>
          <hr width="200" size="1"></hr>
        </div>
        <div className="skillpage-row1box box2">
          <h1 className="secound-skill">Frontend-Libraries</h1>
          <li className="allskills-child secound-Frontend-Libraries">React</li>
          <hr width="200" size="1"></hr>
          <li className="allskills-child third-Frontend-Libraries">Redux</li>
          <hr width="200" size="1"></hr>
        </div>
        <div className="skillpage-row1box box3">
          <h1 className="third-skill">Backend & Frameworks</h1>
          <li className="allskills-child first-Backend-Frameworks">NodeJS</li>
          <hr width="200" size="1"></hr>
          <li className="allskills-child secound-Backend-Frameworks">
            ExpressJS
          </li>
          <hr width="200" size="1"></hr>
        </div>
      </section>
      {/* </div> */}
      {/* <div className="skillpage-row2boxes"> */}
      <section className="skillpage-row2boxes">
        <div className="skillpage-row2box box1">
          <h1 className="first-skill">Databases</h1>
          <li className="allskills-child first-database">MongoDB</li>
          <hr width="200" size="1"></hr>
        </div>
        <div className="skillpage-row2box box2">
          <h1 className="first-skill">UI-Frameworks</h1>
          <li className="allskills-child first-ui-framework">Material UI</li>
          <hr width="200" size="1"></hr>
          <li className="allskills-child first-ui-framework">Bulma CSS</li>
          <hr width="200" size="1"></hr>
          <li className="allskills-child first-ui-framework">Bootstrap</li>
          <hr width="200" size="1"></hr>
        </div>
        <div className="skillpage-row2box box3">
          <h1 className="first-skill">Tools</h1>
          <li className="allskills-child first-tool">Git</li>
          <hr width="200" size="1"></hr>
          <li className="allskills-child first-tool">
            Browser Developer Tools
          </li>
          <hr width="200" size="1"></hr>
        </div>
      </section>
      {/* </div> */}
    </div>
  );
}
