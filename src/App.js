import React from "react";
import logo from "./logo.svg";

// import mainLogo from "./MASTER.PNG";
import mainLogo from "./MASTER.png";
import "./App.css";

import Home from "./components/Home";
import GetInvolved from "./components/GetInvolved";
import AboutUs from "./components/AboutUs";
import Programs from "./components/Programs";
import OurMission from "./components/OurMission";
import Donate from "./components/Donate";
import Navbar from "./components/navbar";
import Blog from "./components/blog";

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
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about" exact component={OurMission}>
          <OurMission />
        </Route>
        <Route exact path="/who-we-are">
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
        <Route exact path="/blog">
          <Blog />
        </Route>
      </Switch>
      <footer class="container-fluid-footer text-center footer">
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_top"
          target="_blank"
          class="footer-form-two"
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="4U5ZGDY7Y2JYS" />
          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
            border="0"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
            target="_blank"
          />
          <img
            alt=""
            border="0"
            src="https://www.paypal.com/en_US/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>{" "}
        <p className="foot-pad">WriteAway© 2020</p>
      </footer>
    </div>
  );
}

export default App;
