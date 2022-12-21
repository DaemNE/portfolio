import React from "react";
import { NavLink } from "react-router-dom";

function Portfolio() {
  return (
    <NavLink to={"/"} className={"continue-button"}>
      Welcome! Click here to navigate to the website!
    </NavLink>
  );
}

export default Portfolio;
