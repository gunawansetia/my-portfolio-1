import React from "react";
import "../assets/css/style.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-navbar m-4">
      <div className="container">
        <a className="navbar-brand logo" href="#home">
          Gunawan Setia
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active mr-4">
              <a className="nav-link" href="#home">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item mr-4">
              <a className="nav-link" href="#works">
                Works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
