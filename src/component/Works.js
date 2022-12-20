import React from "react";

export default function Works(props) {
  const MyWork = () =>
    props.data.map((value, index) => {
      return (
        <div
          className="row d-flex align-items-center my-4 py-4 shadow-project"
          key={index}
        >
          <div className="col ml-4">
            <img
              src={value.picture}
              alt={value.altpicture}
              className="img-fluid"
            />
          </div>
          <div className="col-7 mx-5">
            <h3 className="secondary-color font-weight-light">{value.title}</h3>
            <p className="p-color">{value.paragraph}</p>
            <a
              className="btn btn-dark btn-github"
              href={value.linkgithub}
              role="button"
            >
              Github
            </a>
          </div>
        </div>
      );
    });

  return (
    <section id="works" className="mb-5">
      <div className="container">
        <div className="row">
          <h1 className="primary-color">My Project</h1>
        </div>
        <MyWork />
      </div>
    </section>
  );
}
