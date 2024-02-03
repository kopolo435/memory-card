import React from "react";
import Card from "./Card";
import shuffle from "../javascript/shuffleArray";

function Board({
  cardsData,
  clickedCards,
  setClickedCards,
  setHearts,
  setScore,
}) {
  const shuffledCards = shuffle(cardsData);
  return (
    <div className="board">
      {shuffledCards.map((data) => (
        <Card
          data={data}
          key={data.id}
          clickedCards={clickedCards}
          setClickedCards={setClickedCards}
          setScore={setScore}
          setHearts={setHearts}
        />
      ))}
    </div>
  );
}

export default Board;
