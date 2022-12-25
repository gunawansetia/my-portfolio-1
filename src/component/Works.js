import React from "react";

export default function Works(props) {
  const MyWork = () =>
    props.data.map((value, index) => {
      return (
        <div
          className="card border-0 mb-3 mt-4 mb-5 shadow-project"
          style={{ maxWidth: "1235px" }}
          key={index}
        >
          <div className="row no-gutters d-flex align-items-center  ">
            <div className="col-md-5">
              <img
                src={value.picture}
                alt={value.altpicture}
                className="img-fluid card-img-top round"
              />
            </div>
            <div className="col-md-7 ">
              <div className="card-body mx-3">
                <h3 className="third-color font-weight-light">{value.title}</h3>
                <p className="p-style">{value.paragraph}</p>
                <a
                  className="btn btn-dark btn-github mr-3 my-1"
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
                  Project 🚀
                </a>
              </div>
            </div>
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
