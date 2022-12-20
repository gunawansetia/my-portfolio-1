import About from "component/About";
import Footer from "component/Footer";
import Works from "component/Works";
import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Hero from "./component/Hero";
import main from "./json/main.json";

function App() {
  const [state, setState] = useState({
    hero: {},
    isLoading: true,
  });

  useState(() => {
    fetch(
      "https://my-json-server.typicode.com/gunawansetia/portfolioAPI_1/hero"
    )
      .then((response) => response.json())
      .then((data) => setState({ hero: data, isLoading: false }));
  });

  if (state.isLoading) {
    return <p className="App">Loading...</p>;
  }

  return (
    <>
      <Header />
      <Hero data={state.hero} />
      <Works data={main.works} />
      <About />
      <Footer />
    </>
  );
}

export default App;
