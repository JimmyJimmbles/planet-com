import React, { Component, Fragment } from "react";
import Row from "../Framework/Row";
import Column from "../Framework/Column";
import Section from "../Framework/Section";
import Fields from "../Framework/Fields";

class Styleguide extends Component {
  render() {
    return (
      <Fragment>
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
                  <span className="placeholder">.column.sm-8</span>
                </Column>
                <Column breakpoints="xs-12 sm-4">
                  <span className="placeholder">.column.sm-4</span>
                </Column>
                <Column breakpoints="xs-12 sm-6">
                  <span className="placeholder">.column.sm-6</span>
                </Column>
                <Column breakpoints="xs-12 sm-6">
                  <span className="placeholder">.column.sm-6</span>
                </Column>
                <Column breakpoints="xs-12 sm-4">
                  <span className="placeholder">.column.sm-4</span>
                </Column>
                <Column breakpoints="xs-12 sm-8">
                  <span className="placeholder">.column.sm-8</span>
                </Column>
                <Column breakpoints="xs-12 sm-2">
                  <span className="placeholder">.column.sm-2</span>
                </Column>
                <Column breakpoints="xs-12 sm-10">
                  <span className="placeholder">.column.sm-10</span>
                </Column>
              </Row>
            </div>
          </div>
        </Section>
        <Section>
          <h1>Forms</h1>
          <div className="example">
            <div className="example__view">
              <Row>
                <Column breakpoints="xs-12">
                  <h4>Inputs</h4>
                </Column>
                <Column breakpoints="xs-12 sm-6">
                  <Fields.Text
                    id="fname"
                    label="First Name"
                    name="example_text"
                    placeholder="Example placeholder..."
                  />
                </Column>
                <Column breakpoints="xs-12 sm-6">
                  <Fields.Text
                    id="lname"
                    label="Last Name"
                    name="example_text_2"
                    placeholder="Example placeholder..."
                  />
                </Column>
              </Row>
            </div>
          </div>
        </Section>
      </Fragment>
    );
  }
}

export default Styleguide;
