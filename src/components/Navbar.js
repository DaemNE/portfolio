import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "underline" : "none",
    };
  };

  return (
    <nav className="nav-bar">
      <NavLink style={navLinkStyles} to={"/"}>
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to={"/projects"}>
        Projects
      </NavLink>
      <NavLink style={navLinkStyles} to={"/cv"}>
        Resumé
      </NavLink>
    </nav>
  );
}

export default Navbar;
