import React, { Component, Fragment } from "react";

class Row extends Component {
  state = {
    addClass: this.props.addClass,
    alignment: this.props.alignment,
    children: this.props.children
  };

  render() {
    return (
      <Fragment>
        <div className={this.getRowClasses()}>{this.state.children}</div>
      </Fragment>
    );
  }

  getRowClasses() {
    let classes = "row ";
    const { alignment, addClass } = this.state;

    if (addClass) {
      classes += `${addClass} `;
    }

    switch (alignment) {
      case "left":
        classes += "row--left";
        break;
      case "center":
        classes += "row--center";
        break;
      case "right":
        classes += "row--right";
        break;
      case "between":
        classes += "row--between";
        break;
      case "around":
        classes += "row--around";
        break;
      case "top":
        classes += "row--top";
        break;
      case "middle":
        classes += "row--middle";
        break;
      case "bottom":
        classes += "row--bottom";
        break;
      default:
        classes = "row";
    }

    return classes;
  }
}

export default Row;
