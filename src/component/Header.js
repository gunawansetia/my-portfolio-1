import React, { useState } from "react";
import "../assets/css/style.css";

export default function Header() {
  const [className, setClassName] = useState("d-none");
  const [navClass, setNavClass] = useState("");
  const [status, setStatus] = useState(true);

  const handleClick = () => {
    if (status) {
      setNavClass(" d-none");
      setClassName("pin-navbar reverse");
      setStatus(!status);
      console.log(status);
    } else {
      setNavClass("");
      setClassName("d-none");
      setStatus(!status);
    }
  };

  return (
    <>
      <a className={className} onClick={handleClick} type="button" />
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-white shadow-navbar sticky-top m-4${navClass}`}
      >
        <div className="container">
          <a className="pin-navbar" onClick={handleClick} type="button" />
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
    </>
  );
}
