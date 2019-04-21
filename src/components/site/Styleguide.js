import React, { Component, Fragment } from "react";
import Row from "../framework/Row";
import Column from "../framework/Column";
import Section from "../framework/Section";

class Styleguide extends Component {
  render() {
    return (
      <Section>
        <h1>Grids</h1>
        <div className="example">
          <div className="example__view">
            <Row>
              <Column breakpoints="xs-12 sm-10">
                <span className="placeholder">.column.sm-10</span>
              </Column>
              <Column breakpoints="xs-12 sm-2">
                <span className="placeholder">.column.sm-2</span>
              </Column>
              <Column breakpoints="xs-12 sm-8">
                <span className="placeholder">.column.sm-10</span>
              </Column>
              <Column breakpoints="xs-12 sm-4">
                <span className="placeholder">.column.sm-2</span>
              </Column>
              <Column breakpoints="xs-12 sm-6">
                <span className="placeholder">.column.sm-10</span>
              </Column>
              <Column breakpoints="xs-12 sm-6">
                <span className="placeholder">.column.sm-2</span>
              </Column>
              <Column breakpoints="xs-12 sm-4">
                <span className="placeholder">.column.sm-2</span>
              </Column>
              <Column breakpoints="xs-12 sm-8">
                <span className="placeholder">.column.sm-2</span>
              </Column>
              <Column breakpoints="xs-12 sm-2">
                <span className="placeholder">.column.sm-2</span>
              </Column>
              <Column breakpoints="xs-12 sm-10">
                <span className="placeholder">.column.sm-2</span>
              </Column>
            </Row>
          </div>
        </div>
      </Section>
    );
  }
}

export default Styleguide;
