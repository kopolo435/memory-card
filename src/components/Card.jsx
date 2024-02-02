import React from "react";

function Card({ data, clickedCards, setClickedCards, setHearts, setScore }) {
  function handleCardClick() {
    if (clickedCards.get(data.value)) {
      setHearts((currentHeart) => currentHeart - 1);
      setScore(0);
      setClickedCards(new Map());
    } else {
      const newClickedCards = new Map([...clickedCards]);
      newClickedCards.set(data.value, true);
      setClickedCards(newClickedCards);
      setScore((currentScore) => currentScore + 1);
    }
  }

  return (
    <button type="button" onClick={handleCardClick}>
      <p>{data.value}</p>
    </button>
  );
}

export default Card;
