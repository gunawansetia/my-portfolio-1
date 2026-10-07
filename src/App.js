import About from "component/About";
import Footer from "component/Footer";
import Works from "component/Works";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Hero from "./component/Hero";
import main from "./json/main.json";

function App() {
  const [state, setState] = useState({
    hero: {},
    isLoading: true,
  });

  const refWorks = useRef(null);
  const refHome = useRef(null);
  const refAbout = useRef(null);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/gunawansetia/portfolioAPI_1/hero"
    )
      .then((response) => response.json())
      .then((data) => setState({ hero: data, isLoading: false }));
  }, []);

  if (state.isLoading) {
    return (
      <div className="container">
        <div className="App-header">
          <button className="btn btn-primary" type="button" disabled>
            <span
              className="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header refWorks={refWorks} refAbout={refAbout} refHome={refHome} />
      <Hero refHome={refHome} data={state.hero} />
      <Works refWorks={refWorks} data={main.works} />
      <About refAbout={refAbout} />
      <Footer />
    </>
  );
}

export default App;
