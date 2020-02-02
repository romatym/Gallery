import React from "react";

export default class Header extends React.Component {
  render() {

    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a href="/" className="nav-link">
              <h1>Top commented.</h1>              
              </a>
            </li>
          </ul>

        </div>
      </nav>
    );
  }
}