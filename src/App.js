import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// --------------------------------------------------
// components
// --------------------------------------------------

import Row from "./components/framework/Row";
import Column from "./components/framework/Column";
import Section from "./components/framework/Section";

import Navigation from "./components/site/Navigation";
import Styleguide from "./components/site/Styleguide";
import Home from "./components/site/Home";

import * as ROUTES from "./constants/routes";

// --------------------------------------------------
// scss
// --------------------------------------------------

import "./styles/site/global.scss";
import "./styles/framework/index.scss";

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
