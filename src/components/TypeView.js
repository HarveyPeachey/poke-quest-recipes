import React from 'react';
import TypeItem from './TypeItem'
import PokemonItem from './PokemonItem'
import { pokeSprites } from '../pokeSpritesObtain';
import './styles/TypeView.css';



class TypeView extends React.Component {
  render() {
    const dish = this.props.dish;
    const filterId = this.props.filterId;
    const items = (filterId === 0)
    ? dish.map(dish => {
      return (
        <TypeItem
          key={dish.type_id}
          dish={dish}
          handleOnClick={this.props.handleOnClick}
        />
      );
    })
    : pokeSprites.map((pokeSpritesNew, index) => {
      return (
        <PokemonItem
          key={index}
          pokemon={pokeSprites[index]}
          handlePokeClick={this.props.handlePokeClick}
        />
      );
    })
    return (
      <section className="type-view">
        <h2 className="title">{ filterId === 0 ? "Types" : "Pokemon"}</h2>
        <p className="scroll-text">{ filterId === 0 ? "Select a type and scroll to see recipes (It may take a couple of seconds to load)" : "Select a Pokemon and scroll to see recipes (It may take a couple of seconds to load)"}</p>
        {items}
      </section>
    );
  }
}


// const TypeView = ({ dish, handleOnClick }) => {
//   const items = dish.map(dish => {
//     return (
//       <TypeItem
//         key={dish.type_id}
//         dish={dish}
//         handleOnClick={handleOnClick}
//       />
//     );
//   });
//   return (
//     <section className="type-view">
//       {items}
//     </section>
//   )
// }

export default TypeView;
