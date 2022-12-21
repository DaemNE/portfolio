import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="about">
      <div className="about-title">
        <h1>Hey! I'm Nikolaas Daem,</h1>
      </div>
      <div className="about-content">
        <p>and welcome to my portfolio!</p>
        <p>
          On this webpage you can navigate to{" "}
          <NavLink to={"projects"} className="about-projects">
            Projects
          </NavLink>{" "}
          and have a look at my{" "}
          <NavLink to={"cv"} className="about-experience">
            Experience
          </NavLink>
          ,{" "}
          <NavLink to={"cv"} className="about-skills">
            Skills
          </NavLink>{" "}
          and my{" "}
          <NavLink to={"cv"} className="about-interests">
            Interests
          </NavLink>
          .
        </p>
        <p>
          Furthermore, here you can find my{" "}
          <a
            href="https://www.linkedin.com/in/nikolaas-daem-834185123/"
            className="about-socials"
          >
            LinkedIn
          </a>{" "}
          and{" "}
          <a href="http://www.github.com/DaemNe" className="about-github">
            Github
          </a>
        </p>
      </div>
    </div>
  );
}

export default Home;
