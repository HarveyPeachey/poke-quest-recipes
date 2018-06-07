import React from 'react';
import VariationView from './VariationView'
import './styles/DishView.css';

const DishView = ( {dish} ) => {
  const { dish_name, variations/*, pokemon*/ } = dish
  const isVariationDefined = (variations !== undefined)
  const variation = isVariationDefined
  ? variations.map(variations => {
    return (
      <VariationView
        variations={variations}
      />
    );
  })
  : null
  return (
    <section className="dish-view">
      <h1 className="dish-name">{dish_name}</h1>
      {/*<div className="ingred-image">{pokemon !== undefined ? pokemon : null}</div>*/}
      {variation !== undefined ? variation : null }
    </section>
  )
}

export default DishView;
