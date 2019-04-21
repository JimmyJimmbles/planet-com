import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// --------------------------------------------------
// components
// --------------------------------------------------

import Row from "./components/framework/Row";
import Column from "./components/framework/Column";
import Section from "./components/framework/Section";

import Navigation from "./components/site/Navigation";

// --------------------------------------------------
// scss
// --------------------------------------------------

import "./framework/scss/index.scss";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Section>
            <Navigation />
          </Section>
        </Router>
        <Section>
          <h1>Grids</h1>
          <Row alignment="middle">
            <Column breakpoints="xs-12 md-6">
              <p>Test Paragraph</p>
            </Column>
            <Column breakpoints="xs-12 lg-4">
              <p>Test Paragraph</p>
            </Column>
          </Row>
        </Section>
      </Fragment>
    );
  }
}

export default App;
