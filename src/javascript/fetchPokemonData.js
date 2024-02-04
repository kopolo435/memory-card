async function getPokemonData(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`, {
    mode: "cors",
  });
  const pokemonData = await response.json();
  return Promise.resolve({
    name: pokemonData.name,
    id: pokemonData.id,
    img: pokemonData.sprites.other["official-artwork"].front_default,
  });
}

async function fetchPokemonData() {
  return Promise.all([
    getPokemonData("pikachu"),
    getPokemonData("charmander"),
    getPokemonData("lucario"),
    getPokemonData("vaporeon"),
    getPokemonData("squirtle"),
    getPokemonData("mew"),
    getPokemonData("snorlax"),
    getPokemonData("munchlax"),
    getPokemonData("magikarp"),
    getPokemonData("dratini"),
    getPokemonData("vulpix"),
    getPokemonData("machop"),
    getPokemonData("geodude"),
    getPokemonData("jigglypuff"),
    getPokemonData("bulbasaur"),
    getPokemonData("psyduck"),
    getPokemonData("bellsprout"),
    getPokemonData("arcanine"),
    getPokemonData("reshiram"),
  ]);
}

export default fetchPokemonData;
