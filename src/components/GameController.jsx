import React from "react";
import Board from "./Board";
import fetchPokemonData from "../javascript/fetchPokemonData";
import shuffle from "../javascript/shuffleArray";
import GameInfo from "./GameInfo";

function GameController() {
  const [hearts, setHearts] = React.useState(3);
  const [score, setScore] = React.useState(0);
  const [level, setLevel] = React.useState(1);
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
    return <p>Game Over</p>;
  }

  if (level === 6) {
    return <p>Game Won</p>;
  }

  return pokemonData.length > 0 ? (
    <main>
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
    <p>Cargando</p>
  );
}

export default GameController;
