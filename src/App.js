import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
    <div className="container">

    <Weather defaultCity="Barcelona"/>
    <footer>
This project was coded by Laia Romero and is {" "}
    <a href="https://github.com/romerolaia/rect-weather-app" target="_blank" rel="noreferrer">open-sourced on GitHub</a> {" "}
    </footer>
    </div>
    </div>
  );
}

