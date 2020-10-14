import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../MASTER.png";

function Navbar() {
  return (
    <div>
      <ul class="navbar-list">
        <a class="navbar-brand" href="/">
          <img src={mainLogo} width="150" height="72" />
        </a>
        <li>
          <a>
            <Link to="/blog">Blog</Link>
          </a>
        </li>
        <li>
          <a>
            <Link to="/donate">Donate</Link>
          </a>
        </li>
        <li>
          <a>
            <Link to="/get-involved">Get Involved</Link>
          </a>
        </li>
        <li>
          <a>
            <Link to="/programs">Programs</Link>
          </a>
        </li>

        <li>
          <a>
            <Link to="/about-us">About Us</Link>
          </a>
        </li>
        <li>
          <a>
            <Link to="/our-mission">Our Mission</Link>
          </a>
        </li>
        
      </ul>
    </div>
  );
}

export default Navbar;
