import React from 'react';
import a  from '../assets/apricorn.png';
import bm from '../assets/balmmushroom.png';
import br from '../assets/bigroot.png';
import bb from '../assets/blukberry.png';
import f  from '../assets/fossil.png';
import h  from '../assets/honey.png';
import ir from '../assets/icyrock.png';
import ms from '../assets/mysticalshell.png';
import rm from '../assets/rainbowmatter.png';
import tm from '../assets/tinymushroom.png';
import PokemonItem from './PokemonItem';
import './styles/VariationView.css'

const VariationView = ({variations, pokeSprites, handlePokeClick}) => {
  const { ingredients, quality, pokemon } = variations;
  var basicBronze, silver, gold = null;
  var imgSizes = [];
  var imgUrls = [];
  var variationPokemon = [];
  for (var k = 0; k < pokemon.length; k++) {
    for (var j = 0; j < pokeSprites.length; j++) {
      if (pokemon[k] === pokeSprites[j].name) {
        variationPokemon.push(pokeSprites[j]);
        break;
      }
    }
  }
  const variationPokemonImage = variationPokemon.map((variationPokemonMap, index) => {
    return (
      <PokemonItem
        key={index}
        pokemon={variationPokemon[index]}
        handlePokeClick={handlePokeClick}
      />
    );
  })
  switch(quality) {
    case "Special":
      basicBronze = 6
      silver = 7
      gold = 8
      break;
    case "Very Good":
      basicBronze = 5
      silver = 6
      gold = 7
      break;
    case "Good":
      basicBronze = 4
      silver =  5
      gold = 6
      break;
    case "Normal":
      basicBronze = 2
      silver =  3
      gold = 4
      break;
    default:
      basicBronze  = null
      silver = null
      gold = null
  }
  for (var i = 0; i < ingredients.length; i++) {
    switch(ingredients[i]) {
      case "a":
        imgUrls[i] = `${a}`
        imgSizes[i] = {width: "30px", height:"30px"}
        break;
      case "bm":
        imgUrls[i] = `${bm}`
        imgSizes[i] = {width: "50px", height:"50px"}
        break;
      case "br":
        imgUrls[i] = `${br}`
        imgSizes[i] = {width: "50px", height:"50px"}
        break;
      case "bb":
        imgUrls[i] = `${bb}`
        imgSizes[i] = {width: "30px", height:"30px"}
        break;
      case "f":
        imgUrls[i] = `${f}`
        imgSizes[i] = {width: "30px", height:"30px"}
        break;
      case "h":
        imgUrls[i] = `${h}`
        imgSizes[i] = {width: "50px", height:"50px"}
        break;
      case "ir":
        imgUrls[i] = `${ir}`
        imgSizes[i] = {width: "50px", height:"50px"}
        break;
      case "tm":
        imgUrls[i] = `${tm}`
        imgSizes[i] = {width: "30px", height:"30px"}
        break;
      case "rm":
        imgUrls[i] = `${rm}`
        imgSizes[i] = {width: "50px", height:"50px"}
        break;
      case "ms":
        imgUrls[i] = `${ms}`
        imgSizes[i] = {width: "50px", height:"50px"}
        switch(quality) {
          case "Special":
            basicBronze = 8
            silver = 9
            gold = 10
            break;
          case "Very Good":
            basicBronze = 7
            silver = 8
            gold = 9
            break;
          case "Good":
            basicBronze = 6
            silver =  7
            gold = 8
            break;
          default:
            console.log("Invalid Quality");
        }
        break;
      default:
        console.log("Invalid Shortcode")
      }
  }
  const imagesView =
    <section className="variation-view">
      {/*<div>*/}
        <div className="variation-pokemon-image">{variationPokemonImage !== null ? variationPokemonImage : null }</div>
        <div className="variation-container">
          <div className="info">Quality: {quality}</div>
          <div className="info exped">
            <span className="exped-text">Expeditions:</span><br/>
            <span className="fa-stack fa-1x bronze">
              <i className="fa fa-coffee fa-stack-1x fa-flip-horizontal" aria-hidden="true"></i>
              <i className="fa fa-coffee fa-stack-1x" aria-hidden="true"></i>
            </span>{basicBronze}
            <span className="fa-stack fa-1x silver">
              <i className="fa fa-coffee fa-stack-1x fa-flip-horizontal" aria-hidden="true"></i>
              <i className="fa fa-coffee fa-stack-1x" aria-hidden="true"></i>
            </span>{silver}
            <span className="fa-stack fa-1x gold">
              <i className="fa fa-coffee fa-stack-1x fa-flip-horizontal" aria-hidden="true"></i>
              <i className="fa fa-coffee fa-stack-1x" aria-hidden="true"></i>
            </span>{gold}
          </div>
        {/*</div>*/}
        <img style={imgSizes[0]} className="ingred-image" alt="comp" src={imgUrls[0]} />
        <img style={imgSizes[1]} className="ingred-image" alt="comp" src={imgUrls[1]} />
        <img style={imgSizes[2]} className="ingred-image" alt="comp" src={imgUrls[2]} />
        <img style={imgSizes[3]} className="ingred-image" alt="comp" src={imgUrls[3]} />
        <img style={imgSizes[4]} className="ingred-image" alt="comp" src={imgUrls[4]} />
      </div>
    </section>
  return imagesView
}

export default VariationView;
