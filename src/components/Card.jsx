import React from "react";

function Card({ data, clickedCards, setClickedCards, setHearts, setScore }) {
  const [isCorrect, setIsCorrect] = React.useState(null);
  function handleCardClick() {
    if (clickedCards.get(data.id)) {
      setIsCorrect(false);

      setTimeout(() => {
        setHearts((currentHeart) => currentHeart - 1);
        setScore(0);
        setClickedCards(new Map());
        setIsCorrect(null);
      }, 500);
    } else {
      setIsCorrect(true);

      setTimeout(() => {
        const newClickedCards = new Map([...clickedCards]);
        newClickedCards.set(data.id, true);
        setClickedCards(newClickedCards);
        setScore((currentScore) => currentScore + 1);
        setIsCorrect(null);
      }, 500);
    }
  }

  return (
    <button
      className={`pokemonCard ${
        (isCorrect === true && "valid") ||
        (isCorrect === false && "wrong") ||
        ""
      }`}
      type="button"
      onClick={handleCardClick}
    >
      <div className="imgContainer">
        <img src={data.img} alt={data.name} />
      </div>
      <p>{data.name}</p>
    </button>
  );
}

export default Card;
