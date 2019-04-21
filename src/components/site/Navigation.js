import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar">
          <div className="navbar__container">
            <ul className="navbar__nav">
              <li className="nav__item">
                <Link to={ROUTES.STYLEGUIDE}>Style guide</Link>
              </li>
              <li className="nav__item">
                <Link to={ROUTES.STYLEGUIDE}>Home</Link>
              </li>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Navigation;
