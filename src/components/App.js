import React, { Component } from 'react';
import TypeList from './TypeList';
import RecipeView from './RecipeView';
import { Recipes } from '../Recipes';
import ReactGA from 'react-ga';
import './styles/App.css';

ReactGA.initialize('UA-120203104-1');
ReactGA.pageview(window.location.pathname);

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
        <div className="title" ><strong>Pokemon Quest Recipes</strong></div>
        <TypeList handleOnClick={this.handleOnClick} />
        <RecipeView recipe={this.state.recipe} />
       {/*<div className="app-info">
          <p className="version"><strong>Version 1.1</strong></p>
          <p><strong>Changes since last version:</strong>
            <br/>Mobile and tablet support
            <br/>Expedition amounts for recipe completion
            <br/>Images appear smaller for small ingredients
            <br/>Added more recipes from <a rel="noopener noreferrer" href="https://bit.ly/2sD81iM" target="_blank">https://bit.ly/2sD81iM</a>
          </p>
        </div>*/}
      </div>

    );
  }
}


export default App;
