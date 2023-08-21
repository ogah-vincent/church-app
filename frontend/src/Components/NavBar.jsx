import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "none",
      marginRight: isActive ? "20px" : "8px",
    };
  };

  const [giving, setGiving] = useState(false);

  return (
    <nav className="NavLink">
      
      <div className="logo">
        <img src="rccg-logo.png" alt="Logo" className="logo-roll"/>
        <span className="parish">RCCG ABUNDANT LIFE</span>
      </div>

      


      <div className="nav-links">
        <NavLink style={navLinkStyle} to="/">
          Home
        </NavLink>

        <NavLink style={navLinkStyle} to="/about">
          About
        </NavLink>
        
        <NavLink style={navLinkStyle} to="/contact">
          Contact
        </NavLink>

        <Dropdown />

        <NavLink style={navLinkStyle} to="/media">
          Media
        </NavLink>

        <NavLink
          style={navLinkStyle}
          to="/login"
          className={giving ? "navLink cliked" : "navLink"}
          onClick={() => setGiving(!giving)}
        >
          Giving
        </NavLink>
        
        
      </div>
    </nav>
  );
};

export default Navbar;
