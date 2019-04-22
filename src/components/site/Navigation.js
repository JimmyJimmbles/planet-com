import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar">
          <Link to={ROUTES.HOME} className="navbar__brand">
            Plan.It
          </Link>
          <ul className="navbar__nav">
            <li className="nav__item">
              <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li className="nav__item">
              <Link to={ROUTES.STYLEGUIDE}>Style guide</Link>
            </li>
          </ul>
        </nav>
      </Fragment>
    );
  }
}

export default Navigation;
