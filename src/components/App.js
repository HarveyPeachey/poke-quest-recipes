import React, { Component } from 'react';
import TypeList from './TypeList';
import RecipeView from './RecipeView';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <TypeList />
        <RecipeView />
      </div>
    );
  }
}


export default App;
