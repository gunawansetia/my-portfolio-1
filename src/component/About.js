import React from "react";

export default function About(props) {
  return (
    <section className="bg-bluelight py-5" ref={props.refAbout}>
      <div className="container-md">
        <div className="row d-flex align-items-center">
          <div className="col-md-7 size-medium ">
            <h1 className="secondary-color">Tools used for build this web</h1>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://icons8.com/icon"
              >
                React, bootstrap, JSON
              </a>{" "}
              icon by{" "}
              <a target="_blank" rel="noreferrer" href="https://icons8.com">
                Icons8
              </a>
            </p>
          </div>
          <div className="col-md d-flex justify-content-between ">
            <img width="100rem" src="images/ic_react.svg" alt="logo react" />
            <img
              width="100rem"
              src="images/ic_bootstrap.svg"
              alt="logo bootstrap"
            />
            <img width="100rem" src="/images/ic_jsoon.svg" alt="logo JSON" />
          </div>
        </div>
      </div>
    </section>
  );
}
