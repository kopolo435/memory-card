import React from "react";
import Board from "./Board";
import fetchPokemonData from "../javascript/fetchPokemonData";

function GameController() {
  const [hearts, setHearts] = React.useState(3);
  const [score, setScore] = React.useState(0);
  const [level, setLevel] = React.useState(1);
  const [clickedCards, setClickedCards] = React.useState(new Map());
  const [pokemonData, setPokemonData] = React.useState([]);

  const cardPerLevel = [2, 4, 6, 8, 10]; // almacena el score y cartas posible de cada nivel

  if (score === cardPerLevel[level - 1]) {
    setLevel((currentLevel) => currentLevel + 1);
    setClickedCards(new Map());
    setScore(0);
  }

  React.useEffect(() => {
    const getPokemons = async () => {
      const pokemon = await fetchPokemonData();
      setPokemonData(pokemon);
      console.log(pokemon);
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
    <Board
      cardsData={pokemonData}
      levelCardAmmount={cardPerLevel[level - 1]}
      clickedCards={clickedCards}
      setClickedCards={setClickedCards}
      setHearts={setHearts}
      setScore={setScore}
    />
  ) : (
    <p>Cargando</p>
  );
}

export default GameController;
