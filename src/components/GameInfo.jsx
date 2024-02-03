import React from "react";

function GameInfo({ hearts, level, currentScore, maxScore }) {
  return (
    <div className="gameInfo">
      <p>
        Corazones:
        <span> {hearts}</span>
      </p>
      <p>
        Nivel:
        <span> {level}</span>
      </p>
      <p>
        Score:
        <span>
          {" "}
          {currentScore}/{maxScore}
        </span>
      </p>
    </div>
  );
}

export default GameInfo;
