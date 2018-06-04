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
  for (var i = 0; i < components.length; i++) {
    switch(components[i]) {
      case "a":
        components[i] =
        "https://www.serebii.net/quest/ingredients/apricorn.png"
        break;
      case "bm":
        components[i] =
        "https://www.serebii.net/quest/ingredients/balmmushroom.png"
        break;
      case "br":
        components[i] =
        "https://www.serebii.net/quest/ingredients/bigroot.png"
        break;
      case "bb":
        components[i] =
        "https://www.serebii.net/quest/ingredients/blukberry.png"
        break;
      case "f":
        components[i] =
        "https://www.serebii.net/quest/ingredients/fossil.png"
        break;
      case "h":
        components[i] =
        "https://www.serebii.net/quest/ingredients/honey.png"
        break;
      case "ir":
        components[i] =
        "https://www.serebii.net/quest/ingredients/icyrock.png"
        break;
      case "tm":
        components[i] =
        "https://www.serebii.net/quest/ingredients/tinymushroom.png"
        break;
      case "rm":
        components[i] =
        "https://www.serebii.net/quest/ingredients/rainbowmatter.png"
        break;
      case "ms":
        components[i] =
        "https://www.serebii.net/quest/ingredients/mysticalshell.png"
        break;
      default:
        console.log("Invalid Shortcode")
      }
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
