import React, { useEffect, useState } from "react";
import "../assets/css/style.css";

export default function Header(props) {
  const [className, setClassName] = useState("d-none");
  const [navClass, setNavClass] = useState("");
  const [state, setState] = useState({
    status: true,
  });
  const [isActive, setIsActive] = useState(0);

  const showWorks = () => {
    window.scrollTo({
      top: props.refWorks.current.offsetTop,
      behavior: "smooth",
    });
  };

  const showAbout = () => {
    window.scrollTo({
      top: props.refAbout.current.offsetTop,
      behavior: "smooth",
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (state.status) {
      setNavClass(" d-none");
      setClassName("pin-navbar reverse");
      setState({ status: !state.status });
    } else {
      setNavClass("");
      setClassName("d-none");
      setState({ status: !state.status });
    }
  };

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.scrollY >= 0 && window.scrollY <= window.innerHeight / 2) {
        setIsActive(0);
      } else if (
        props.refWorks.current.offsetTop - window.scrollY <
          window.innerHeight / 2 &&
        props.refAbout.current.offsetTop - window.scrollY >=
          window.innerHeight / 2
      ) {
        setIsActive(1);
      } else setIsActive(2);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
      console.log(props.refAbout.current.offsetTop);
    };
  }, [props]);

  return (
    <>
      <div
        aria-hidden="true"
        className="d-none d-sm-none d-md-none d-lg-block d-xl-block"
      >
        <i className={className} onClick={handleClick} type="button" />
      </div>
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-white shadow-navbar sticky-top m-4${navClass}`}
      >
        <div className="container">
          <div
            aria-hidden="true"
            className="d-none d-sm-none d-md-none d-lg-block d-xl-block"
          >
            <i onClick={handleClick} className="pin-navbar" type="button" />
          </div>
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
              <li
                className={
                  isActive === 0 ? "nav-item mr-4 active" : "nav-item mr-4"
                }
              >
                <a className="nav-link" href="#home">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li
                className={
                  isActive === 1 ? "nav-item mr-4 active" : "nav-item mr-4"
                }
              >
                <a className="nav-link" href="#works" onClick={showWorks}>
                  Works
                </a>
              </li>
              <li className={isActive === 2 ? "nav-item active" : "nav-item"}>
                <a className="nav-link" onClick={showAbout} href="#about">
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
