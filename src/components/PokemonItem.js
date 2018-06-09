import React from 'react';
import sprites from '../assets/pokeSprites.png';
import './styles/PokemonItem.css'

const PokemonItem = ({ pokemon, handlePokeClick }) => {
  const backgroundPosition = pokemon.x + " -" + pokemon.y + "px"
  const style = { backgroundImage: `url(${sprites})`, backgroundPosition };
  const image =
    <button onClick={() => handlePokeClick(pokemon.name)} style={style} className="poke-image"></button>
  return image
}

export default PokemonItem;
