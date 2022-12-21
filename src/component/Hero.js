import React from "react";

export default function Hero(props) {
  if (!props.data) return null;
  const caption = props.data.paragraph;
  const gambarHero = props.data.picture;

  return (
    <section id="home" className="bg-bluelight mb-5" ref={props.refHome}>
      <div className="container-sm">
        <div className="row mt-5 d-flex align-items-center bg-bluelight">
          <div className="col-md mt-5 bg-bluelight ">
            <h1 className="primary-color size-100">I Am</h1>
            <h1 className="primary-color">Gunawan Setia Wiguna</h1>
            <p className="p-color">{caption}</p>
          </div>
          <div className="col-md mt-5 d-flex justify-content-center ">
            <img
              className="bg-white"
              width="80%"
              src={gambarHero}
              alt="Gambar Hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
