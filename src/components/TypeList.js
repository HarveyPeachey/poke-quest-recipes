import React from 'react';
import TypeItem from './TypeItem'
import { pokeFood } from '../pokeFood';
import './styles/TypeList.css';

const TypeList = ({ handleOnClick }) => {
  const items = pokeFood.map(pokeFood => {
    return (
      <TypeItem
        key={pokeFood.id}
        pokeFood={pokeFood}
        handleOnClick={handleOnClick}
      />
    );
  });
  return (
    <section className="type-list">
      {items}
    </section>
  )
}

export default TypeList;
