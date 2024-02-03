import React from "react";
import Board from "./Board";
import fetchPokemonData from "../javascript/fetchPokemonData";
import shuffle from "../javascript/shuffleArray";
import GameInfo from "./GameInfo";

function GameController() {
  const [hearts, setHearts] = React.useState(3);
  const [score, setScore] = React.useState(0);
  const [level, setLevel] = React.useState(5);
  const [clickedCards, setClickedCards] = React.useState(new Map());
  const [pokemonData, setPokemonData] = React.useState([]);
  const [levelCards, setLevelCards] = React.useState([]);

  const cardPerLevel = [2, 4, 6, 8, 10]; // almacena el max score y cartas posible de cada nivel

  if (score === cardPerLevel[level - 1]) {
    const shuffledPokemons = shuffle(pokemonData);
    setLevelCards(shuffledPokemons.slice(0, cardPerLevel[level]));
    setLevel((currentLevel) => currentLevel + 1);
    setClickedCards(new Map());
    setScore(0);
  }

  React.useEffect(() => {
    const getPokemons = async () => {
      const pokemons = await fetchPokemonData();
      const shuffledPokemons = shuffle(pokemons);
      setPokemonData(pokemons);
      setLevelCards(shuffledPokemons.slice(0, cardPerLevel[level - 1]));
    };
    getPokemons();
  }, []);

  if (hearts === 0) {
    return (
      <main>
        <p>Game Over</p>
        <p>Que lastima, no lograste completar el juego</p>
      </main>
    );
  }

  if (level === 6) {
    return (
      <main>
        <p>Game Won</p>
        <p>Felicidades, haz completado el juego con exito</p>
      </main>
    );
  }

  return pokemonData.length > 0 ? (
    <main>
      <div className="rules">
        <p>
          En este juego deberas hacer click en cada pokemon una sola vez por
          nivel, debes recordar a cuales ya seleccionaste para no fallar.
        </p>
      </div>
      <GameInfo
        hearts={hearts}
        level={level}
        currentScore={score}
        maxScore={cardPerLevel[level - 1]}
      />
      <Board
        cardsData={levelCards}
        clickedCards={clickedCards}
        setClickedCards={setClickedCards}
        setHearts={setHearts}
        setScore={setScore}
      />
    </main>
  ) : (
    <main className="loadingContainer">
      <p>Cargando</p>
    </main>
  );
}

export default GameController;
