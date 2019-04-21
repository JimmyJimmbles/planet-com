// --------------------------------------------------
// base
// --------------------------------------------------

import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

// --------------------------------------------------
// components
// --------------------------------------------------

import Section from "../framework/Section";
import Navigation from "./Navigation";
import Styleguide from "./Styleguide";
import Home from "./Home";

// --------------------------------------------------
// styles
// --------------------------------------------------

import "../../styles/site/global.scss";
import "../../styles/framework/index.scss";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Section>
            <Navigation />
          </Section>

          <Route exact path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.STYLEGUIDE} component={Styleguide} />
        </Router>
      </Fragment>
    );
  }
}

export default App;
