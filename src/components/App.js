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
        <TypeList handleOnClick={this.handleOnClick} />
        <RecipeView recipe={this.state.recipe} />
      </div>
    );
  }
}


export default App;
