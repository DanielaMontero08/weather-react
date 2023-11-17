import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/workshops/shecodes-responsive-a1ced978-6da7-4e7b-bf03-ac5d47fab8d9/projects/1834582"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daniela Montero
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/DanielaMontero08/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://master--moonlit-cat-dc0b68.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
