import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav
      className="navbar container"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <NavLink to="/" activeClassName="is-primary" className="navbar-item">
          <h1 className="title">artus</h1>
        </NavLink>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <NavLink
                activeClassName="is-primary"
                to="/signup"
                className="button"
              >
                Sign up
              </NavLink>
              <NavLink
                activeClassName="is-primary"
                to="/login"
                className="button"
              >
                Log in
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;