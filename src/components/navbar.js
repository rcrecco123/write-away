import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../MASTER.png";
import {isMobile} from 'react-device-detect';

function Navbar() {

  if (isMobile) {
    return (
   <div className="mobile-nav-master">
      <a className="navbar-brand mobile-img-brand" href="/">
          <img src={mainLogo} width="150" height="72" />
        </a>
  <ul className="mobile-nav">
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
            <Link to="/who-we-are">Who We Are</Link>
          </a>
        </li>
        <li>
          <a>
            <Link to="/about">About</Link>
          </a>
        </li>
  </ul>
  
  </div>

    )
  } else {

  

  return (
    <div>
      <ul className="navbar-list">
        <a className="navbar-brand" href="/">
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
          <Link to="/who-we-are">Who We Are</Link>
          </a>
        </li>
        <li>
          <a>
          <Link to="/about">About</Link>
          </a>
        </li>
      </ul>
    </div>
  );
  }
}

export default Navbar;
