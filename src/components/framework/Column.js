import React, { Component, Fragment } from "react";

class Column extends Component {
  state = {
    addClass: this.props.addClass,
    breakpoints: this.props.breakpoints,
    children: this.props.children
  };

  render() {
    return (
      <Fragment>
        <div className={this.getColumnClasses()}>{this.state.children}</div>
      </Fragment>
    );
  }

  getColumnClasses() {
    let classes = "column ";
    const { breakpoints, addClass } = this.state;

    if (addClass) {
      classes += `${addClass} `;
    }

    if (breakpoints) {
      classes += breakpoints;
    }

    return classes;
  }
}

export default Column;
