import React from "react";

function getAssetUrl(path) {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const clean = path.startsWith("/") ? path.slice(1) : path;
  const publicUrl = process.env.PUBLIC_URL || "";
  return publicUrl ? `${publicUrl}/${clean}` : `/${clean}`;
}

export default function Hero(props) {
  if (!props.data) return null;
  const caption = props.data.paragraph;
  const gambarHero = props.data.picture;

  return (
    <section className="bg-bluelight mb-5" ref={props.refHome}>
      <div className="container-sm">
        <div className="row d-flex align-items-center bg-bluelight">
          <div className="col-md mt-5 bg-bluelight ">
            <h1 className="primary-color size-100">I Am</h1>
            <h1 className="primary-color">Gunawan Setia Wiguna</h1>
            <p className="p-style primary-color">{caption}</p>
          </div>
          <div className="col-md d-flex justify-content-center ">
            <img
              className="bg-white"
              width="80%"
              src={getAssetUrl(gambarHero)}
              alt="Gambar Hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
