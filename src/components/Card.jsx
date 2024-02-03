import React from "react";

function Card({ data, clickedCards, setClickedCards, setHearts, setScore }) {
  function handleCardClick() {
    if (clickedCards.get(data.id)) {
      setHearts((currentHeart) => currentHeart - 1);
      setScore(0);
      setClickedCards(new Map());
    } else {
      const newClickedCards = new Map([...clickedCards]);
      newClickedCards.set(data.id, true);
      setClickedCards(newClickedCards);
      setScore((currentScore) => currentScore + 1);
    }
  }

  return (
    <button className="pokemonCard" type="button" onClick={handleCardClick}>
      <img src={data.img} alt={data.name} />
      <p>{data.name}</p>
    </button>
  );
}

export default Card;
