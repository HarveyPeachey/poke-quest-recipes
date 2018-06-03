import React from 'react';
import './styles/IngredView.css'

const IngredView = ({set_ingredients}) => {
  const { components, quality } = set_ingredients
  const imagesView =
    <section className="ingred-view">
      <div className="quality">Quality: {quality}</div>
      <img className="ingred-image" alt="comp" src={components[0]} />
      <img className="ingred-image" alt="comp" src={components[1]} />
      <img className="ingred-image" alt="comp" src={components[2]} />
      <img className="ingred-image" alt="comp" src={components[3]} />
      <img className="ingred-image" alt="comp" src={components[4]} />
    </section>
  return imagesView
}

export default IngredView;
