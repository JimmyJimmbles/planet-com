import React, { Component } from "react";

class Section extends Component {
  state = {
    id: this.props.id,
    sectionSize: this.props.sectionSize,
    containerSize: this.props.containerSize,
    children: this.props.children
  };

  render() {
    const { id, children } = this.state;
    return (
      <section id={id} className={this.getSectionClasses()}>
        <div className={this.getContainerClasses()}>{children}</div>
      </section>
    );
  }

  getSectionClasses() {
    const { sectionSize } = this.state;
    let classes = "section ";

    switch (sectionSize) {
      case "xs":
        classes += "section--xs";
        break;
      case "sm":
        classes += "section--sm";
        break;
      case "md":
        classes += "section--md";
        break;
      case "lg":
        classes += "section--lg";
        break;
      case "xl":
        classes += "section--xl";
        break;
      default:
        classes = "section";
    }

    return classes;
  }

  getContainerClasses() {
    const { containerSize } = this.state;
    let classes = "container ";

    switch (containerSize) {
      case "xs":
        classes += "container--xs";
        break;
      case "sm":
        classes += "container--sm";
        break;
      case "md":
        classes += "container--md";
        break;
      case "lg":
        classes += "container--lg";
        break;
      case "xl":
        classes += "container--xl";
        break;
      case "full":
        classes += "container--full";
        break;
      default:
        classes = "container";
    }

    return classes;
  }
}

export default Section;
