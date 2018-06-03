import React from 'react';
import './styles/IngredView.css'

const IngredView = ({set_ingredients}) => {
  const { components } = set_ingredients
  return <section className="ingred-view"><img className="ingred-image" alt="comp" src={components[0]} /><img className="ingred-image" alt="comp" src={components[1]} /><img className="ingred-image" alt="comp" src={components[2]} /><img className="ingred-image" alt="comp" src={components[3]} /><img className="ingred-image" alt="comp" src={components[4]} /></section>
}

export default IngredView;
