import React from "react";

export default function Footer() {
  return (
    <section id="footer" className="bg-gray">
      <div className="container py-4">
        <div className="row">
          <div className="col-md">
            <h4>Contact</h4>
            <p> 📩 @newgunawansetiawiguna@gmail.com</p>
            <a
              href="https://www.linkedin.com/in/gunawansetia"
              target="_blank"
              rel="noreferrer"
              type="button"
              className="btn btn-linkedin"
            >
              Linkedin
            </a>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md text-center">
            <p>Copyrights 2022 • All rights reserved • Gunawan Setia</p>
            <hr />
          </div>
        </div>
      </div>
    </section>
  );
}
