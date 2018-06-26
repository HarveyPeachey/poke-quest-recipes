import React from 'react';
import VariationView from './VariationView'
import PokemonItem from './PokemonItem'
import { pokeSprites } from '../pokeSpritesObtain';
import './styles/DishView.css';

class DishView extends React.Component {
  render() {
    const filterId = this.props.filterId;
    var id = this.props.id;
    var variation = null;
    if (filterId === 0) {
      const { dish_name, variations, pokemon } = this.props.dish[0];
      var pokeVariations = [];
      var invVariation = null;
      const isVariationDefined = (dish_name !== undefined);
      const isPokemonDefined = (pokemon !== undefined);
      var dishPokemon = [];
      if (isPokemonDefined) {
        if (pokemon.length !== 0) {
          for (var i = 0; i < pokemon.length; i++) {
            for (var j = 0; j < pokeSprites.length; j++) {
              if (pokemon[i].name === pokeSprites[j].name) {
                dishPokemon.push(pokeSprites[j]);
                // for (var k = 0; k < pokemon[i].quality.length; k++)
                // dishPokemon[dishPokemon.length-1].quality = pokemon[i].quality;
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
            pokeSprites={pokeSprites}
            handlePokeClick={this.props.handlePokeClick}
          />
        );
      })
      : null

      if (id !== null) {
        for (var p = 0; p < pokemon.length; p++) {
          if (id === pokemon[p].name) {
            for (var o = 0; o < variations.length; o++) {
              for (var l = 0; l < pokemon[p].quality.length; l++) {
                if (pokemon[p].quality[l] === variations[o].quality) {
                  pokeVariations.push(variations[o]);
                }
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
                pokeSprites={pokeSprites}
                handlePokeClick={this.props.handlePokeClick}
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
            {pokemonImage !== null ? <p>Filter by Pokemon</p> : null}
            {pokemonImage}
          </section>
          <h3>{id}
          <div>{invVariation}</div>
          </h3>
          {variation !== null ? variation : null }
        </section>
      );
    }
    else if (filterId === 1) {
      const dish = this.props.dish;
      const isDishEmpty = (Object.keys(dish[0]).length !== 0);
      // Reverses mapping so that mulligan is shown at the bottom
      variation = isDishEmpty
      ? dish.slice(0).reverse().map(dishes => {
        return (
          [<h3>{dishes.dish_name}</h3>,
          dishes.variations.map(variations => {
            return (
              <VariationView
                variations={variations}
                pokeSprites={pokeSprites}
                handlePokeClick={this.props.handlePokeClick}
              />
            );
          })]
        );
      })
      : null
      return (
        <section className="dish-view">
          <h2 className="dish-name">{id}</h2>
          {variation}
        </section>
      );
    }
  }
}

export default DishView;
