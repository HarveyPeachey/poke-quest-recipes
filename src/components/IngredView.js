import React from 'react';
import './styles/IngredView.css'

const IngredView = ({set_ingredients}) => {
  const { components, quality } = set_ingredients
  var noExped = null
  switch(quality) {
    case "Special":
      noExped = 6
      break;
    case "Very Good":
      noExped = 5
      break;
    case "Good":
      noExped = 4
      break;
    case "Normal":
      noExped = 2
      break;
    default:
      noExped = null
  }
  const imagesView =
    <section className="ingred-view">
      <div className="info">Quality: {quality}</div>
      <div className="info exped">Expeditions: {noExped}</div>
      <img className="ingred-image" alt="comp" src={components[0]} />
      <img className="ingred-image" alt="comp" src={components[1]} />
      <img className="ingred-image" alt="comp" src={components[2]} />
      <img className="ingred-image" alt="comp" src={components[3]} />
      <img className="ingred-image" alt="comp" src={components[4]} />
    </section>
  return imagesView
}

export default IngredView;
