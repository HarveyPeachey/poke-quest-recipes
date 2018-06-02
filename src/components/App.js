import React, { Component } from 'react';
import TypeList from './TypeList';
import RecipeView from './RecipeView';
import { Recipes } from '../Recipes';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { recipeName: {}};
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleOnClick(id) {
    for (var i = 0; i < Recipes.length; i++) {
      if (Recipes[i].type_id === id) {
        const recipeName = Recipes[i];
        this.setState({recipeName: recipeName})
      }
    }
  }
  render() {
    return (
      <div className="App">
        <TypeList handleOnClick={this.handleOnClick} />
        <RecipeView recipeName={this.state.recipeName} />
      </div>
    );
  }
}


export default App;
