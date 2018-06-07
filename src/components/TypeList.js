import React from 'react';
import TypeItem from './TypeItem'
import './styles/TypeList.css';

const TypeList = ({ recipe, handleOnClick }) => {
  const items = recipe.map(recipe => {
    return (
      <TypeItem
        key={recipe.type_id}
        recipe={recipe}
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
