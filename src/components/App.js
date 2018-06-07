import React, { Component } from 'react';
import TypeList from './TypeList';
import DishView from './DishView';
import { Dishes } from '../Dishes';
import ReactGA from 'react-ga';
import './styles/App.css';

ReactGA.initialize('UA-120203104-1');
ReactGA.pageview(window.location.pathname);

class App extends Component {
  constructor() {
    super();
    this.state = { dish: {}};
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleOnClick(id) {
    for (var i = 0; i < Dishes.length; i++) {
      if (Dishes[i].type_id === id) {
        const dish = Dishes[i];
        this.setState({dish: dish})
      }
    }
  }
  render() {
    return (
        <div className="App">
        <div className="title" ><h1>Pokemon Quest Recipes</h1></div>
        <TypeList dish={ Dishes } handleOnClick={this.handleOnClick} />
        <DishView dish={this.state.dish} />
        <div className="app-info">
          <p className="version"><strong>Version 1.2</strong></p>
          <p><strong>Changes since last version:</strong>
            <br/>Added expedition time based on cooking pots used (basic/bronze,gold,silver)
            <br/>Added potential pokemon to each dish
            <br/>Fixed iPad font size issue
            <br/>Restructured internal components
            <br/>Merged internal json
          </p>
        </div>
      </div>

    );
  }
}


export default App;
