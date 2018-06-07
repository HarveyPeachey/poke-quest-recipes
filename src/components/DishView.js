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
  var count = 0
  if (isPokemonDefined) {
    if (pokemon.length !== 0) {
      for (var i = 0; i < pokemon.length; i++) {
        count = count + 1
        for (var j = 0; j < pokeSprites.length; j++) {
          count = count + 1
          if (pokemon[i] === pokeSprites[j].name) {
            dishPokemon.push(pokeSprites[j]);
            break;
          }
        }
      }
    }
  }
  console.log(count);
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
