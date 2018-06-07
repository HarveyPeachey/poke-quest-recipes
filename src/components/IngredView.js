import React from 'react';
import './styles/IngredView.css'

const IngredView = ({set_ingredients}) => {
  const { components, quality } = set_ingredients
  var noExped = null
  var imgSizes = []
  var imgUrls = []
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
        imgUrls[i] = "https://www.serebii.net/quest/ingredients/apricorn.png"
        imgSizes[i] = {width: "30px", height:"30px"}
        break;
      case "bm":
        imgUrls[i] = "https://www.serebii.net/quest/ingredients/balmmushroom.png"
        imgSizes[i] = {width: "50px", height:"50px"}
        break;
      case "br":
        imgUrls[i] = "https://www.serebii.net/quest/ingredients/bigroot.png"
        imgSizes[i] = {width: "50px", height:"50px"}
        break;
      case "bb":
        imgUrls[i] = "https://www.serebii.net/quest/ingredients/blukberry.png"
        imgSizes[i] = {width: "30px", height:"30px"}
        break;
      case "f":
        imgUrls[i] = "https://www.serebii.net/quest/ingredients/fossil.png"
        imgSizes[i] = {width: "30px", height:"30px"}
        break;
      case "h":
        imgUrls[i] = "https://www.serebii.net/quest/ingredients/honey.png"
        imgSizes[i] = {width: "50px", height:"50px"}
        break;
      case "ir":
        imgUrls[i] = "https://www.serebii.net/quest/ingredients/icyrock.png"
        imgSizes[i] = {width: "50px", height:"50px"}
        break;
      case "tm":
        imgUrls[i] = "https://www.serebii.net/quest/ingredients/tinymushroom.png"
        imgSizes[i] = {width: "30px", height:"30px"}
        break;
      case "rm":
        imgUrls[i] = "https://www.serebii.net/quest/ingredients/rainbowmatter.png"
        imgSizes[i] = {width: "50px", height:"50px"}
        break;
      case "ms":
        imgUrls[i] = "https://www.serebii.net/quest/ingredients/mysticalshell.png"
        imgSizes[i] = {width: "50px", height:"50px"}
        break;
      default:
        console.log("Invalid Shortcode")
      }
  }
  const imagesView =
    <section className="ingred-view">
      <div className="info">Quality: {quality}</div>
      <div className="info exped">Expeditions: {noExped}</div>
      <img style={imgSizes[0]} className="ingred-image" alt="comp" src={imgUrls[0]} />
      <img style={imgSizes[1]} className="ingred-image" alt="comp" src={imgUrls[1]} />
      <img style={imgSizes[2]} className="ingred-image" alt="comp" src={imgUrls[2]} />
      <img style={imgSizes[3]} className="ingred-image" alt="comp" src={imgUrls[3]} />
      <img style={imgSizes[4]} className="ingred-image" alt="comp" src={imgUrls[4]} />
    </section>
  return imagesView
}

export default IngredView;
