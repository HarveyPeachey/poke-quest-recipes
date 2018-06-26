import React, { Component } from 'react';
import FilterView from './FilterView';
import TypeView from './TypeView';
import DishView from './DishView';
import { Dishes } from '../Dishes';
import ReactGA from 'react-ga';
import './styles/App.css';

ReactGA.initialize('UA-120203104-1');
ReactGA.pageview(window.location.pathname);

class App extends Component {
  constructor() {
    super();
    this.state = { dish: [{}], pokeRecId: null, filterId: 0};
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handlePokeClick = this.handlePokeClick.bind(this);
    this.handleFilterClick = this.handleFilterClick.bind(this);
  }
  handleOnClick(dishId) {
    for (var i = 0; i < Dishes.length; i++) {
      if (Dishes[i].type_id === dishId) {
        var dish = Dishes[i];
        this.setState({dish: [dish]})
      }
    }
    this.setState({pokeRecId: null});
  }
  handlePokeClick(pokeRecId) {
    // Checks which filter is being used
    if (this.state.filterId === 1) {
      var dish = [];
      var obj = {};
      // Loops through 12 dishes
      for (var i = 0; i < Dishes.length; i++) {
        // Loops through length of pokemon in the current dish
        for (var j = 0; j < Dishes[i].pokemon.length; j++) {
          // Checks if name of the pokemon is the same as the button pressed
          if (pokeRecId === Dishes[i].pokemon[j].name) {
            // Loops through the qualities of said pokemon
            for (var h = 0; h < Dishes[i].pokemon[j].quality.length; h++) {
              for (var k = 0; k < Dishes[i].variations.length; k++) {
                if (Dishes[i].pokemon[j].quality[h] === Dishes[i].variations[k].quality) {
                  if (dish.length === 0) {
                    obj.dish_name = Dishes[i].dish_name;
                    dish.push(obj);
                    dish[dish.length - 1].variations = [];
                    dish[dish.length - 1].variations.push(Dishes[i].variations[k]);
                    obj = {};
                  }
                  else if (dish[dish.length-1].dish_name === Dishes[i].dish_name) {
                      dish[dish.length-1].variations.push(Dishes[i].variations[k]);
                  }
                  else {
                    obj.dish_name = Dishes[i].dish_name;
                    dish.push(obj);
                    dish[dish.length-1].variations = [];
                    dish[dish.length-1].variations.push(Dishes[i].variations[k]);
                    obj = {};
                  }
                }
              }
            }
          }
        }
      }
      this.setState({dish: dish});
      this.setState({pokeRecId});
    }
    else {
      this.setState({pokeRecId});
    }
  }
  handleFilterClick(filterId) {
    this.setState({filterId});
    this.setState({dish: [{}]})
    this.setState({pokeRecId: null});
  }
  render() {
    return (
        <div className="App">
        <div className="title" ><h1>Pokemon Quest Recipes</h1></div>
        {/*<div className="hide cool-item">
        <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/gp/product/B07DJXXFH6/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07DJXXFH6&linkCode=as2&tag=harveypeachey-20&linkId=84b022bddc497e46d6215c3d5ba9e733"><img border={0} alt="img" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B07DJXXFH6&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=harveypeachey-20" /></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=harveypeachey-20&l=am2&o=1&a=B07DJXXFH6" width={1} height={1} border={0} alt="img" style={{border: 'none !important', margin: '0px !important'}} />
        </div>*/}
        <FilterView handleFilterClick={this.handleFilterClick} />
        <TypeView dish={ Dishes } handleOnClick={this.handleOnClick} handlePokeClick={this.handlePokeClick} filterId={this.state.filterId} />
        <DishView dish={this.state.dish} handlePokeClick={this.handlePokeClick} id={this.state.pokeRecId} filterId={this.state.filterId}/>
        <div className="app-info">
          <p className="version"><strong>Version 1.4</strong></p>
          {/*<div className="cool-item">
            <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/gp/product/B07DJXXFH6/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07DJXXFH6&linkCode=as2&tag=harveypeachey-20&linkId=84b022bddc497e46d6215c3d5ba9e733"><img border={0} alt="img" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B07DJXXFH6&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=harveypeachey-20" /></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=harveypeachey-20&l=am2&o=1&a=B07DJXXFH6" width={1} height={1} border={0} alt="img" style={{border: 'none !important', margin: '0px !important'}} />
            <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/gp/product/B07DJRPZQ9/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07DJRPZQ9&linkCode=as2&tag=harveypeachey-20&linkId=698ad31822e45ff92e8108c254be106c"><img border={0} alt="img" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B07DJRPZQ9&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=harveypeachey-20" /></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=harveypeachey-20&l=am2&o=1&a=B07DJRPZQ9" width={1} height={1} border={0} alt="img" style={{border: 'none !important', margin: '0px !important'}} />
            <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/gp/product/B01N5OKM3I/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01N5OKM3I&linkCode=as2&tag=harveypeachey-20&linkId=f552ec67b7bbf4e13b7541d4d4a707b9"><img border={0} alt="img" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01N5OKM3I&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=harveypeachey-20" /></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=harveypeachey-20&l=am2&o=1&a=B01N5OKM3I" width={1} height={1} border={0} alt="img" style={{border: 'none !important', margin: '0px !important'}} />
            <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/gp/product/B01N5OKGLH/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01N5OKGLH&linkCode=as2&tag=harveypeachey-20&linkId=50b993c2e9b335c881ccca5aa69b4062"><img border={0} alt="img" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01N5OKGLH&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=harveypeachey-20" /></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=harveypeachey-20&l=am2&o=1&a=B01N5OKGLH" width={1} height={1} border={0} alt="img" style={{border: 'none !important', margin: '0px !important', display: 'none'}} />
            <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/gp/product/B01MT8AIBE/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01MT8AIBE&linkCode=as2&tag=harveypeachey-20&linkId=569b714bd57ef113c771e1017fce8763"><img border={0} alt="img" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01MT8AIBE&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=harveypeachey-20" /></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=harveypeachey-20&l=am2&o=1&a=B01MT8AIBE" width={1} height={1} border={0} alt="img" style={{border: 'none !important', margin: '0px !important'}} />
            <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/gp/product/B01N7RE3HB/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01N7RE3HB&linkCode=as2&tag=harveypeachey-20&linkId=a389964cb22b7c08975d1cf78b4378b4"><img border={0} alt="img" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01N7RE3HB&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=harveypeachey-20" /></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=harveypeachey-20&l=am2&o=1&a=B01N7RE3HB" width={1} height={1} border={0} alt="img" style={{border: 'none !important', margin: '0px !important'}} />
            <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/gp/product/B01MY7GHKJ/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01MY7GHKJ&linkCode=as2&tag=harveypeachey-20&linkId=081c3d64fb4d3c2682443590bc4b3c02"><img border={0} alt="img" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01MY7GHKJ&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=harveypeachey-20" /></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=harveypeachey-20&l=am2&o=1&a=B01MY7GHKJ" width={1} height={1} border={0} alt="img" style={{border: 'none !important', margin: '0px !important'}} />
          </div>*/}
          <div>Buy Me A Coffee (It'll be tea cos British and all that)</div>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" defaultValue="_s-xclick" />
            <input type="hidden" name="hosted_button_id" defaultValue="CYQL3ACYFER4S" />
            <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif" border={0} name="submit" alt="PayPal – The safer, easier way to pay online!" />
            <img alt="paypal" border={0} src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width={1} height={1} />
          </form>
          <p><strong>Changes since last version:</strong>
            <br/>• Filter by all dish obtainable pokemon. Click on pokemon and click a pokemon to see all availible recipes.
            <br/>• More potential pokemon added.
            <br/>• Added more recipes.
            <br/>• Ingredient images now served locally.
            <br/>• Corrected ambrosia wait times.
            <br/>• Added cooking pot icons
            {/*<iframe className="strawpoll" title="strawpoll" src="https://www.strawpoll.me/embed_1/15908467">Loading poll...</iframe>*/}
            <br/>Shoutouts!:
            <br/><a href="https://docs.google.com/spreadsheets/d/1sEdebcAiOmnJaNB_2JnZg7WQDtez1dwcjcLKrqWKd4Y/edit#gid=974437028">Recipe Book</a>
             | <a href="http://uk.ign.com/wikis/pokemon-quest">IGN Wiki</a>
             | <a href="https://docs.google.com/spreadsheets/d/11qzKQ_pi98Zlq5MP4IRgNveRw_IB_TJswnIPgxDKnM0/edit#gid=1531442843">Recipes DB</a>
             | <a href="https://www.serebii.net/quest/cooking.shtml">Serebii</a>
             | <a href="https://www.reddit.com/r/PokemonQuest/">Pokemon Quest Subreddit</a>
             | <a href="https://www.reddit.com/r/PokemonQuest/">Pokemon Quest Discord</a>
          </p>
        </div>
      </div>

    );
  }
}


export default App;
