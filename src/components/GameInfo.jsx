import React from "react";
import "../css/gameInfo.css";

function GameInfo({
  hearts, level, currentScore, maxScore,
}) {
  return (
    <div className="gameInfo">
      <div className="heartInfo">
        <p>Vidas</p>
        <div className="heartsContainer">
          <span
            className={`material-symbols-outlined ${
              hearts > 0 ? "fullHeart" : "emptyHeart"
            }`}
          >
            favorite
          </span>
          <span
            className={`material-symbols-outlined ${
              hearts > 1 ? "fullHeart" : "emptyHeart"
            }`}
          >
            favorite
          </span>
          <span
            className={`material-symbols-outlined ${
              hearts > 2 ? "fullHeart" : "emptyHeart"
            }`}
          >
            favorite
          </span>
        </div>
      </div>
      <p>
        Nivel:
        <span>
          {" "}
          {level}
        </span>
      </p>
      <p>
        Score:
        <span>
          {" "}
          {currentScore}
          /
          {maxScore}
        </span>
      </p>
    </div>
  );
}

export default GameInfo;
