import React from "react";

export default function Hero(props) {
  if (!props.data) return null;
  const caption = props.data.paragraph;
  const gambarHero = props.data.picture;

  return (
    <section id="home" className="bg-bluelight mb-5">
      <div className="container ">
        <div className="row mt-5 d-flex align-items-center bg-bluelight">
          <div className="col mt-5 bg-bluelight mr-5">
            <h1 className="primary-color size-100 text-left">I Am</h1>
            <h1 className="primary-color">Gunawan Setia Wiguna</h1>
            <p className="p-color">{caption}</p>
          </div>
          <div className="col mt-5 d-flex justify-content-end ">
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
