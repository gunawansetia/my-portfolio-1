import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container ">
        <div className="row">
          <div className="col">
            <div className="bingkai-tools" />
            <h1 className="primary-color">Tools used for build this web</h1>
          </div>
        </div>
      </div>
      <div className="bg-bluelight">
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-around py-5">
              <img src="images/ic_react.svg" alt="logo react" />
              <img src="images/ic_bootstrap.svg" alt="logo bootstrap" />
              <img width="200rem" src="/images/ic_jsoon.svg" alt="logo JSON" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
