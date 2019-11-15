import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/tw2.svg";

const Navbar = () => {
  return (
    <header className="page-header">
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" className="nav-item">
              <img src={logo} alt="The Logo of TW2" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="nav-item">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-item">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-item">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
