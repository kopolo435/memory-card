import React from "react";
import Card from "./Card";

function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function Board({
  cardsData,
  levelCardAmmount,
  clickedCards,
  setClickedCards,
  setHearts,
  setScore,
}) {
  const shuffledCards = shuffle(cardsData.slice(0, levelCardAmmount));
  return (
    <div className="board">
      {shuffledCards.map((data) => (
        <Card
          data={data}
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
