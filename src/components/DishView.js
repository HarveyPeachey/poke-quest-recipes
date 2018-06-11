import React from 'react';
import VariationView from './VariationView'
import PokemonItem from './PokemonItem'
import { pokeSprites } from '../pokeSprites';
import './styles/DishView.css';

class DishView extends React.Component {
  render() {
    const { dish_name, variations, pokemon } = this.props.dish;
    var id = this.props.id;
    var variation = null;
    var pokeVariations = [];
    var invVariation = null;
    const isVariationDefined = (dish_name !== undefined);;
    const isPokemonDefined = (pokemon !== undefined);
    var dishPokemon = [];
    if (isPokemonDefined) {
      if (pokemon.length !== 0) {
        for (var i = 0; i < pokemon.length; i++) {
          for (var j = 0; j < pokeSprites.length; j++) {
            if (pokemon[i].name === pokeSprites[j].name) {
              dishPokemon.push(pokeSprites[j]);
              break;
            }
          }
        }
      }
    }

    variation = isVariationDefined
    ? variations.map((variations, index) => {
      return (
        <VariationView
          key={index}
          variations={variations}
        />
      );
    })
    : null

    if (id !== null) {
      for (var p = 0; p < pokemon.length; p++) {
        if (id === pokemon[p].name) {
          for (var o = 0; o < variations.length; o++) {
            if (pokemon[p].quality === variations[o].quality) {
              pokeVariations.push(variations[o]);
            }
          }
        }
      }
      if (pokeVariations.length > 0) {
        variation = pokeVariations.map((pokeVariations, index) => {
          return (
            <VariationView
              key={index}
              variations={pokeVariations}
            />
          );
        })
      }
      else {
        invVariation = "(Not enough data for this Pokemon)"
      }
    }

    const pokemonImage = isPokemonDefined
    ? pokemon.map((pokemon, index) => {
      return (
        <PokemonItem
          key={index}
          pokemon={dishPokemon[index]}
          handlePokeClick={this.props.handlePokeClick}
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
        <h3>{id}
        <div>{invVariation}</div>
        </h3>
        {variation !== null ? variation : null }
      </section>
    );
  }
}

export default DishView;
