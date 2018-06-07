import React from 'react';
import sprites from '../assets/pokeSprites.png';
import './styles/PokemonItem.css'

const PokemonItem = ({ pokemon }) => {
  const backgroundPosition = pokemon.x + " -" + pokemon.y + "px"
  const style = { backgroundImage: `url(${sprites})`, backgroundPosition };
  const image =
    <div style={style} className="poke-image"></div>
  return image
}

export default PokemonItem;
