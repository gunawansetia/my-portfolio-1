import React, { useState } from "react";

function getAssetUrl(path) {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const clean = path.startsWith("/") ? path.slice(1) : path;
  const publicUrl = process.env.PUBLIC_URL || "";
  return publicUrl ? `${publicUrl}/${clean}` : `/${clean}`;
}

function ProjectMedia({ project }) {
  const [imageError, setImageError] = useState(false);

  const currentImageSrc = imageError
    ? getAssetUrl(project.fallbackImage || "images/fallback-project.svg")
    : getAssetUrl(project.picture);

  return (
    <div className="project-media-container d-flex flex-column align-items-center justify-content-center p-2">
      <img
        src={currentImageSrc}
        alt={project.altpicture || project.title}
        className="img-fluid project-img-styled"
        onError={() => {
          if (!imageError) {
            setImageError(true);
          }
        }}
      />
      {imageError && (
        <span className="badge badge-light border text-muted mt-1 small">
          🖼️ Fallback Preview
        </span>
      )}
    </div>
  );
}

function ProjectCard({ project, index }) {
  const isLive = project.linkproject && project.linkproject !== "#";
  const showGithub = !project.hideGithub && project.linkgithub;

  return (
    <div
      className="card border-0 mt-4 mb-5 shadow-project"
      style={{ maxWidth: "1235px" }}
      key={index}
    >
      <div className="row no-gutters d-flex align-items-center">
        <div className="col-md-5">
          <ProjectMedia project={project} />
        </div>
        <div className="col-md-7">
          <div className="card-body mx-3">
            <h4 className="third-color font-weight-light">{project.title}</h4>
            {project.tools && project.tools.length > 0 && (
              <div className="mb-2 d-flex flex-wrap">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="badge badge-pill badge-light border text-info mr-2 mb-1 px-3 py-1 font-weight-normal"
                    style={{ fontSize: "0.82rem", backgroundColor: "#f0f9ff" }}
                  >
                    🛠️ {tool}
                  </span>
                ))}
              </div>
            )}
            <p className="p-style">{project.paragraph}</p>
            <p className="p-style is-bold">{project.date}</p>
            {showGithub && (
              <a
                className="btn btn-dark btn-github mr-3 my-1"
                href={project.linkgithub}
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            )}
            {isLive ? (
              <a
                className="btn btn-primary btn-md my-1"
                href={project.linkproject}
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                Project 🚀
              </a>
            ) : (
              <button
                className="btn btn-outline-secondary btn-md my-1 disabled"
                disabled
                type="button"
                style={{ cursor: "not-allowed", opacity: 0.7 }}
                title="This project has not been published yet"
              >
                Not Published Yet 🔒
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Works(props) {
  return (
    <section className="mb-5" ref={props.refWorks}>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <h1 className="third-color">My Project</h1>
          </div>
        </div>
        {props.data &&
          props.data.map((project, index) => (
            <ProjectCard project={project} index={index} key={index} />
          ))}
      </div>
    </section>
  );
}
