import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-bluelight py-5">
      <div className="container-md">
        <div className="row d-flex align-items-center">
          <div className="col-md-7 size-medium ">
            <h1 className="secondary-color">Tools used for build this web</h1>
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
