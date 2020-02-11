import React from "react";
//import "../stylesheets/index.scss";

export default function Header(props) {
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
