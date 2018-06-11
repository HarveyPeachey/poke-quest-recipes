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
    this.state = { dish: {}, id: null};
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handlePokeClick = this.handlePokeClick.bind(this);
  }
  handleOnClick(id) {
    for (var i = 0; i < Dishes.length; i++) {
      if (Dishes[i].type_id === id) {
        const dish = Dishes[i];
        this.setState({dish: dish})
      }
    }
    this.setState({id: null});
  }
  handlePokeClick(id) {
    this.setState({id});
  }
  render() {
    return (
        <div className="App">
        <div className="title" ><h1>Pokemon Quest Recipes</h1></div>
        <TypeList dish={ Dishes } handleOnClick={this.handleOnClick} />
        <DishView dish={this.state.dish} handlePokeClick={this.handlePokeClick} id={this.state.id}/>
        <div className="app-info">
          <p className="version"><strong>Version 1.21</strong></p>
          <iframe src="https://www.strawpoll.me/embed_1/15862021">Loading poll...</iframe>
          {/*<p><strong>Changes since last version:</strong>
            <br/>Added expedition time based on cooking pots used (basic/bronze,gold,silver)
            <br/>Added potential pokemon to each dish
            <br/>Fixed iPad font size issue
            <br/>Restructured internal components
            <br/>Merged internal json
            <br/>Improved pokemon image efficiency
          </p>*/}
        </div>
      </div>

    );
  }
}


export default App;
