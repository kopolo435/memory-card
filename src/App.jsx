import React from "react";
import GameController from "./components/GameController";
import "./css/main.css";

function App() {
  return (
    <>
      <header>
        <h1>Pokemon memory Game</h1>
      </header>
      <GameController />
      <footer>
        <p>Made by </p>

        <div className="iconLinkContainer">
          <i className="devicon-github-original" />
          <a href="https://github.com/kopolo435/memory-card">@Kopolo435</a>
        </div>
      </footer>
    </>
  );
}

export default App;
