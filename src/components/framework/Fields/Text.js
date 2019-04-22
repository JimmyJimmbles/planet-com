import React, { Component, Fragment } from "react";

class Text extends Component {
  render() {
    return (
      <Fragment>
        <div className="form__field">
          {this.handleLabel()}
          {this.handleInput()}
        </div>
      </Fragment>
    );
  }

  handleLabel() {
    const { label, required, id } = this.props;
    let labelClass = "form__label";

    labelClass += " required";

    if (!label) {
      return null;
    }

    return (
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
    );
  }

  handleInput() {
    const { name, placeholder, value, id } = this.props;
    return (
      <input
        id={id}
        className="form__input"
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={event => this.handleChange(name, event.target.value)}
      />
    );
  }

  handleChange(name, value) {
    console.log("name ", name);
    console.log("value ", value);

    const inputData = Object.assign(
      {},
      {
        [name]: value
      }
    );

    this.setState({
      inputData
    });

    console.log(inputData);
  }
}

export default Text;
