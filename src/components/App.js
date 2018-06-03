import React, { Component } from 'react';
import TypeList from './TypeList';
import RecipeView from './RecipeView';
import { Recipes } from '../Recipes';
import './styles/App.css';

// Logic for conversion of Shortcode to URLS
for (var i = 0; i < Recipes.length; i++) {
  for (var j = 0; j < Recipes[i].set_ingredients.length; j++) {
    for (var k = 0; k < Recipes[i].set_ingredients[j].components.length; k++) {
      switch(Recipes[i].set_ingredients[j].components[k]) {
        case "a":
          Recipes[i].set_ingredients[j].components[k] =
          "https://www.serebii.net/quest/ingredients/apricorn.png"
          break;
        case "bm":
          Recipes[i].set_ingredients[j].components[k] =
          "https://www.serebii.net/quest/ingredients/balmmushroom.png"
          break;
        case "br":
          Recipes[i].set_ingredients[j].components[k] =
          "https://www.serebii.net/quest/ingredients/bigroot.png"
          break;
        case "bb":
          Recipes[i].set_ingredients[j].components[k] =
          "https://www.serebii.net/quest/ingredients/blukberry.png"
          break;
        case "f":
          Recipes[i].set_ingredients[j].components[k] =
          "https://www.serebii.net/quest/ingredients/fossil.png"
          break;
        case "h":
          Recipes[i].set_ingredients[j].components[k] =
          "https://www.serebii.net/quest/ingredients/honey.png"
          break;
        case "ir":
          Recipes[i].set_ingredients[j].components[k] =
          "https://www.serebii.net/quest/ingredients/icyrock.png"
          break;
        case "tm":
          Recipes[i].set_ingredients[j].components[k] =
          "https://www.serebii.net/quest/ingredients/tinymushroom.png"
          break;
        default:
          console.log("Invalid Shortcode")
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = { recipe: {}};
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleOnClick(id) {
    for (var i = 0; i < Recipes.length; i++) {
      if (Recipes[i].type_id === id) {
        const recipe = Recipes[i];
        this.setState({recipe: recipe})
      }
    }
  }
  render() {
    return (
      <div className="App">
        <TypeList handleOnClick={this.handleOnClick} />
        <RecipeView recipe={this.state.recipe} />
      </div>
    );
  }
}


export default App;
