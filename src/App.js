import React from "react";
import logo from "./logo.svg";

// import mainLogo from "./MASTER.PNG";
import mainLogo from "./MASTER.png";
import "./App.css";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Home from "./components/Home";
import GetInvolved from "./components/GetInvolved";
import AboutUs from "./components/AboutUs";
import Programs from "./components/Programs";
import OurMission from "./components/OurMission";
import Donate from "./components/Donate";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div>
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">
              <img src={mainLogo} width="150" height="72" />
            </a>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
              <li>
                <Link to="/our-mission">Our Mission</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/programs">Programs</Link>
              </li>

              <li>
                <Link to="/get-involved">Get Involved</Link>
              </li>
              <li>
                <Link to="/donate">Donate</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <Redirect from="/" to="/write-away" /> */}
      {/* <Redirect from="/" exact to="/write-away" /> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/our-mission" exact component={OurMission}>
          <OurMission />
        </Route>
        <Route exact path="/about-us">
          <AboutUs />
        </Route>
        <Route exact path="/programs">
          <Programs />
        </Route>
        <Route exact path="/get-involved">
          <GetInvolved />
        </Route>
        <Route exact path="/donate">
          <Donate />
        </Route>
      </Switch>
      <footer class="container-fluid-footer text-center footer">
        <p>WriteAway© 2020</p>
      </footer>
    </div>
  );
}

export default App;
