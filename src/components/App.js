import React, { Component } from 'react';
import TypeList from './TypeList';
import RecipeView from './RecipeView';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleOnClick(id) {
    console.log(id);
  }
  render() {
    return (
      <div className="App">
        <TypeList handleOnClick={this.handleOnClick} />
        <RecipeView />
      </div>
    );
  }
}


export default App;
