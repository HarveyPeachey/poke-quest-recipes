import React from 'react';
import VariationView from './VariationView'
import PokemonItem from './PokemonItem'
import { pokeSprites } from '../pokeSprites';
import './styles/DishView.css';

class DishView extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { dish_name, variations, pokemon } = this.props.dish;
    var id = this.props.id;
    const isVariationDefined = (dish_name !== undefined);
    const isPokemonDefined = (pokemon !== undefined);
    var dishPokemon = [];
    if (isPokemonDefined) {
      if (pokemon.length !== 0) {
        for (var i = 0; i < pokemon.length; i++) {
          for (var j = 0; j < pokeSprites.length; j++) {
            if (pokemon[i] === pokeSprites[j].name) {
              dishPokemon.push(pokeSprites[j]);
              break;
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
        <div>{id}</div>
        {variation !== undefined ? variation : null }
      </section>
    );
  }
}


// const DishView = ( {dish, handlePokeClick} ) => {
//   const { dish_name, variations, pokemon } = dish
//   const isVariationDefined = (variations !== undefined)
//   const isPokemonDefined = (pokemon !== undefined)
//   var dishPokemon = []
//   if (isPokemonDefined) {
//     if (pokemon.length !== 0) {
//       for (var i = 0; i < pokemon.length; i++) {
//         for (var j = 0; j < pokeSprites.length; j++) {
//           if (pokemon[i] === pokeSprites[j].name) {
//             dishPokemon.push(pokeSprites[j]);
//             break;
//           }
//         }
//       }
//     }
//   }
//
//   const variation = isVariationDefined
//   ? variations.map((variations, index) => {
//     return (
//       <VariationView
//         key={index}
//         variations={variations}
//       />
//     );
//   })
//   : null
//
//   const pokemonImage = isVariationDefined
//   ? pokemon.map((pokemon, index) => {
//     return (
//       <PokemonItem
//         key={index}
//         pokemon={dishPokemon[index]}
//         handlePokeClick={handlePokeClick}
//       />
//     );
//   })
//   : null
//
//   return (
//     <section className="dish-view">
//       <h2 className="dish-name">{dish_name}</h2>
//       <section className="pokemon-view">
//         {pokemonImage !== undefined ? pokemonImage : null }
//       </section>
//       {variation !== undefined ? variation : null }
//     </section>
//   )
// }

export default DishView;
