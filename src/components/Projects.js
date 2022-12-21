import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import projectData from "../project-data/projectsData";

function Projects() {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "underline" : "none",
    };
  };
  const initialList = projectData;

  const [projects, setProjects] = useState(initialList);
  const [current, setCurrent] = useState("All");
  const [projectDisplay, setProjectDisplay] = useState([]);

  const filterList = (projectList) => {
    if (current === "All") {
      setProjectDisplay(
        initialList.map((project) => {
          return (
            <div key={project.id} className="project-card">
              <div className="card-title">{project.title}</div>
              <img
                className="card-image"
                src={project.image}
                alt=""
                onClick={() =>
                  window.open(
                    `${project.link}`,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              />
              <div className="card-description">{project.description}</div>
              <div className="card-link">
                <div className="card-skill">{project.skill}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  onClick={() =>
                    window.open(
                      `${project.link}`,
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
            </div>
          );
        })
      );
    } else {
      const filteredList = projectList.filter((project) => {
        return project.skill === current;
      });
      setProjectDisplay(
        filteredList.map((project) => {
          return (
            <div key={project.id} className="project-card">
              <div className="card-title">{project.title}</div>
              <img
                className="card-image"
                src={project.image}
                alt=""
                onClick={() =>
                  window.open(
                    `${project.link}`,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              />
              <div className="card-description">{project.description}</div>
              <div className="card-link">
                <div className="card-skill">{project.skill}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  onClick={() =>
                    window.open(
                      `${project.link}`,
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
            </div>
          );
        })
      );
    }
  };

  useEffect(() => {
    setProjects(initialList);

    filterList(projects);

    setProjects(projects);
  }, [current]);

  return (
    <div className="projects">
      <div className="project-display">
        <nav className="nav-bar-projects">
          <h1 className="projects-title">Projects</h1>
          <NavLink
            style={navLinkStyles}
            className={"projects-html"}
            to={"/projects/html"}
            onClick={() => setCurrent("Html")}
          >
            Html
          </NavLink>
          <NavLink
            style={navLinkStyles}
            className={"projects-css"}
            to={"/projects/css"}
            onClick={() => setCurrent("Css")}
          >
            Css
          </NavLink>
          <NavLink
            style={navLinkStyles}
            className={"projects-javascript"}
            to={"/projects/javascript"}
            onClick={() => setCurrent("Javascript")}
          >
            Javascript
          </NavLink>
          <NavLink
            style={navLinkStyles}
            className={"projects-react"}
            to={"/projects/react"}
            onClick={() => setCurrent("React")}
          >
            React
          </NavLink>
          <NavLink
            style={navLinkStyles}
            className={"projects-all"}
            to={"/projects/"}
            onClick={() => setCurrent("All")}
          >
            All
          </NavLink>
        </nav>
        <div className="project-display-cards">{projectDisplay}</div>
      </div>
    </div>
  );
}

export default Projects;
