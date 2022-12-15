import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was created by
          <a
            href="https://www.linkedin.com/in/ellie-s-51088146/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Ellie Spanswick
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/els-390/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
