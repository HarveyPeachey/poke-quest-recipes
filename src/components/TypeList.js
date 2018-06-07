import React from 'react';
import TypeItem from './TypeItem'
import './styles/TypeView.css';

const TypeView = ({ dish, handleOnClick }) => {
  const items = dish.map(dish => {
    return (
      <TypeItem
        key={dish.type_id}
        dish={dish}
        handleOnClick={handleOnClick}
      />
    );
  });
  return (
    <section className="type-view">
      {items}
    </section>
  )
}

export default TypeView;
