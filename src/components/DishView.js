import React from 'react';
import VariationView from './VariationView'
import PokemonItem from './PokemonItem'
import { pokeSprites } from '../pokeSprites';
import './styles/DishView.css';

const DishView = ( {dish} ) => {
  const { dish_name, variations, pokemon } = dish
  const isVariationDefined = (variations !== undefined)
  const isPokemonDefined = (pokemon !== undefined)
  var dishPokemon = []
  if (isPokemonDefined) {
    if (pokemon.length !== 0) {
      for (var i = 0; i < pokeSprites.length; i++) {
        for (var j = 0; j < pokemon.length; j++) {
          if (pokemon[j] === pokeSprites[i].name) {
            dishPokemon.push(pokeSprites[i]);
          }
        }
      }
    }
  }
  const variation = isVariationDefined
  ? variations.map((variations, index) => {
    return (
      <VariationView
        key={index}
        variations={variations}
      />
    );
  })
  : null
  const pokemonImage = isVariationDefined
  ? pokemon.map((pokemon, index) => {
    return (
      <PokemonItem
        key={index}
        pokemon={dishPokemon[index]}
      />
    );
  })
  : null
  return (
    <section className="dish-view">
      <h2 className="dish-name">{dish_name}</h2>
      <section className="pokemon-view">
        {pokemonImage !== undefined ? pokemonImage : null }
      </section>
      {variation !== undefined ? variation : null }
    </section>
  )
}

export default DishView;
