import React from 'react';
import sprites from '../assets/pokeSpritesnq8.png';
import './styles/PokemonItem.css'

const PokemonItem = ({ pokemon, handlePokeClick }) => {
  console.log(pokemon);
  const backgroundPosition = pokemon.x + " -" + pokemon.y + "px"
  const style = { backgroundImage: `url(${sprites})`, backgroundPosition };
  const image =
    <button onClick={() => handlePokeClick(pokemon.name)} style={style} className="poke-image"></button>
  return image
}

export default PokemonItem;
