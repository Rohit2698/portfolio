import React from "react";
import "./App.css";
import Header from "./Header/Header";
import AboutMe from "./AboutMe/About";
import Project from "./Project/Project";
import Language from "./Languages/Language";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <div id="header">
        <Header />
      </div>
      <div id="aboutMe">
        <AboutMe />
      </div>
      <div id="Project">
        <Project />
      </div>
      <div id="language">
        <Language />
      </div>
      <Footer />
    </div>
  );
}

export default App;
