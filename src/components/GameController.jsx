import React from "react";
import Board from "./Board";

function GameController() {
  const [hearts, setHearts] = React.useState(3);
  const [score, setScore] = React.useState(0);
  const [level, setLevel] = React.useState(1);
  const [clickedCards, setClickedCards] = React.useState(new Map());

  const cardPerLevel = [2, 4, 6, 8, 10]; // almacena el score y cartas posible de cada nivel

  if (score === cardPerLevel[level - 1]) {
    setLevel((currentLevel) => currentLevel + 1);
    setClickedCards(new Map());
    setScore(0);
  }

  const levelData = [
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "4" },
    { value: "5" },
    { value: "6" },
    { value: "7" },
    { value: "8" },
    { value: "9" },
    { value: "10" },
  ];

  if (hearts === 0) {
    return <p>Game Over</p>;
  }

  if (level === 6) {
    return <p>Game Won</p>;
  }

  return (
    <Board
      cardsData={levelData}
      levelCardAmmount={cardPerLevel[level - 1]}
      clickedCards={clickedCards}
      setClickedCards={setClickedCards}
      setHearts={setHearts}
      setScore={setScore}
    />
  );
}

export default GameController;
