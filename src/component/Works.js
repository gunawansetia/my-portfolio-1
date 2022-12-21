import React from "react";

export default function Works(props) {
  const MyWork = () =>
    props.data.map((value, index) => {
      return (
        <div
          className="row d-flex align-items-center mt-4 mb-5 py-4  shadow-project"
          key={index}
        >
          <div className="col-md mx-5">
            <img
              src={value.picture}
              alt={value.altpicture}
              className="img-fluid"
            />
          </div>
          <div className="col-md-8 ">
            <h3 className="third-color font-weight-light">{value.title}</h3>
            <p className="p-style">{value.paragraph}</p>
            <a
              className="btn btn-dark btn-github mr-3"
              href={value.linkgithub}
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              className={
                value.linkproject !== "#"
                  ? "btn btn-primary btn-md"
                  : "btn btn-primary btn-md disabled"
              }
              href={value.linkproject}
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              Project
            </a>
          </div>
        </div>
      );
    });

  return (
    <section className="mb-5" ref={props.refWorks}>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <h1 className="third-color">My Project</h1>
          </div>
        </div>
        <MyWork />
      </div>
    </section>
  );
}
