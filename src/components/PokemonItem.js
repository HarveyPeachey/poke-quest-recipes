import React from 'react';
import sprites from '../assets/pokeSpritesnq8.png';
import './styles/PokemonItem.css'

const PokemonItem = ({ pokemon, handlePokeClick, rate }) => {
  const backgroundPosition = pokemon.x + " -" + pokemon.y + "px"
  const style = { backgroundImage: `url(${sprites})`, backgroundPosition };
  var isRateDefined = false;
  if (rate !== undefined) {
    isRateDefined = true;
  }
  const image =
      isRateDefined ?
        (<div className="poke-container">
          <button onClick={() => handlePokeClick(pokemon.name)} style={style} id={pokemon.name.toLowerCase()}className="poke-image"></button>
          <div className="rate">{rate}%</div>
        </div>)
      : (<button onClick={() => handlePokeClick(pokemon.name)} style={style} id={pokemon.name.toLowerCase()}className="poke-image"></button>)
  return image
}

export default PokemonItem;
