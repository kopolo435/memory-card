import React from "react";
import GameController from "./components/GameController";
import "./css/main.css";

function App() {
  return (
    <>
      <header>
        <h1>Memory Game</h1>
      </header>
      <GameController />
      <footer>
        <p>Made by</p>
        <a href="https://github.com/kopolo435/memory-card">@Kopolo435</a>
      </footer>
    </>
  );
}

export default App;
