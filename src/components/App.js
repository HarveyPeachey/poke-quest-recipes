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
    const region = Intl.DateTimeFormat().resolvedOptions().timeZone
    var regionChina = false
    if (region === "Asia/Hong_Kong") {
      regionChina = true;
    }
    return (
        <div className="App">
        <div className="title" ><h1>Pokemon Quest Recipes</h1></div>
        {regionChina ? null :
        (<div className="hide cool-item">
        <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/gp/product/B07DJXXFH6/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07DJXXFH6&linkCode=as2&tag=harveypeach01-20&linkId=2b3697ee68e3e3d2749343ac3991fd70"><img border={0} alt="img" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B07DJXXFH6&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=harveypeach01-20" /></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=harveypeach01-20&l=am2&o=1&a=B07DJXXFH6" width={1} height={1} border={0} alt="img" style={{border: 'none !important', margin: '0px !important'}} />
        </div>)}
        <FilterView handleFilterClick={this.handleFilterClick} />
        <TypeView dish={ Dishes } handleOnClick={this.handleOnClick} handlePokeClick={this.handlePokeClick} filterId={this.state.filterId} />
        <DishView dish={this.state.dish} handlePokeClick={this.handlePokeClick} id={this.state.pokeRecId} filterId={this.state.filterId}/>
        <div className="app-info">
          <p className="version"><strong>Version 1.62</strong></p>
          {/*regionChina
        ?(<div className="cool-item">
            <a target="_blank" rel="noopener noreferrer" href="https://amazon.cn/gp/product/B072FHHZFJ/ref=as_li_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B072FHHZFJ&linkCode=as2&tag=harveypeachey-23&linkId=100d77363e82da02606f5ce7624cf4e5"><img border={0} alt="img" src="//ws-cn.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=CN&ASIN=B072FHHZFJ&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=harveypeachey-23" /></a><img src="//ir-cn.amazon-adsystem.com/e/ir?t=harveypeachey-23&l=am2&o=28&a=B072FHHZFJ" width={1} height={1} border={0} alt="img" style={{border: 'none !important', margin: '0px !important'}} />
            <a target="_blank" rel="noopener noreferrer" href="https://amazon.cn/gp/product/B078Y4BV3P/ref=as_li_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B078Y4BV3P&linkCode=as2&tag=harveypeachey-23&linkId=358ddde594f28dc7e9d76890d954bf95"><img border={0} alt="img" src="//ws-cn.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=CN&ASIN=B078Y4BV3P&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=harveypeachey-23" /></a><img src="//ir-cn.amazon-adsystem.com/e/ir?t=harveypeachey-23&l=am2&o=28&a=B078Y4BV3P" width={1} height={1} border={0} alt="img" style={{border: 'none !important', margin: '0px !important'}} />
            <a target="_blank" rel="noopener noreferrer" href="https://amazon.cn/gp/product/B01NH7L005/ref=as_li_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B01NH7L005&linkCode=as2&tag=harveypeachey-23&linkId=17cd8145a3dd109c60df277c95ac409c"><img border={0} alt="img" src="//ws-cn.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=CN&ASIN=B01NH7L005&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=harveypeachey-23" /></a><img src="//ir-cn.amazon-adsystem.com/e/ir?t=harveypeachey-23&l=am2&o=28&a=B01NH7L005" width={1} height={1} border={0} alt="img" style={{border: 'none !important', margin: '0px !important'}} />
            <a target="_blank" rel="noopener noreferrer" href="https://amazon.cn/gp/product/B077SGP67M/ref=as_li_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B077SGP67M&linkCode=as2&tag=harveypeachey-23&linkId=304639ef675784ac0dc629c8a2be8c9b"><img border={0} alt="img" src="//ws-cn.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=CN&ASIN=B077SGP67M&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=harveypeachey-23" /></a><img src="//ir-cn.amazon-adsystem.com/e/ir?t=harveypeachey-23&l=am2&o=28&a=B077SGP67M" width={1} height={1} border={0} alt="img" style={{border: 'none !important', margin: '0px !important'}} />
          </div>)*/}
          <div className="cool-item">
            <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/gp/product/B07DJXXFH6/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07DJXXFH6&linkCode=as2&tag=harveypeach01-20&linkId=2b3697ee68e3e3d2749343ac3991fd70"><img border={0} alt="img" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B07DJXXFH6&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=harveypeach01-20" /></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=harveypeach01-20&l=am2&o=1&a=B07DJXXFH6" width={1} height={1} border={0} alt="img" style={{border: 'none !important', margin: '0px !important'}} />
            <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/gp/product/B07DJRPZQ9/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07DJRPZQ9&linkCode=as2&tag=harveypeach01-20&linkId=0b6ce6455a79c4035d6894b935498803"><img border={0} alt="img" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B07DJRPZQ9&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=harveypeach01-20" /></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=harveypeach01-20&l=am2&o=1&a=B07DJRPZQ9" width={1} height={1} border={0} alt="img" style={{border: 'none !important', margin: '0px !important'}} />
            <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/gp/product/B01N5OKM3I/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01N5OKM3I&linkCode=as2&tag=harveypeach01-20&linkId=723bab478522d46e3988e8a3fd89b187"><img border={0} alt="img" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01N5OKM3I&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=harveypeach01-20" /></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=harveypeach01-20&l=am2&o=1&a=B01N5OKM3I" width={1} height={1} border={0} alt="img" style={{border: 'none !important', margin: '0px !important'}} />
            <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/gp/product/B01N5OKGLH/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01N5OKGLH&linkCode=as2&tag=harveypeach01-20&linkId=2f9193fb630f834da138e5fe311d610b"><img border={0} alt="img" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01N5OKGLH&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=harveypeach01-20" /></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=harveypeach01-20&l=am2&o=1&a=B01N5OKGLH" width={1} height={1} border={0} alt="img" style={{border: 'none !important', margin: '0px !important', display: 'none'}} />
            <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/gp/product/B01MT8AIBE/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01MT8AIBE&linkCode=as2&tag=harveypeach01-20&linkId=081ba8af67c262bfc9b8ada9b98655f9"><img border={0} alt="img" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01MT8AIBE&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=harveypeach01-20" /></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=harveypeach01-20&l=am2&o=1&a=B01MT8AIBE" width={1} height={1} border={0} alt="img" style={{border: 'none !important', margin: '0px !important'}} />
            <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/gp/product/B01N7RE3HB/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01N7RE3HB&linkCode=as2&tag=harveypeach01-20&linkId=853d2a7ad34ffad7b153be1d6f97c9b5"><img border={0} alt="img" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01N7RE3HB&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=harveypeach01-20" /></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=harveypeach01-20&l=am2&o=1&a=B01N7RE3HB" width={1} height={1} border={0} alt="img" style={{border: 'none !important', margin: '0px !important'}} />
          </div>
          <div className="cool-item">
            <iframe className="desk-cool" src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=48&l=ur1&category=pd2018freetrial&banner=16DPWKB3QJA3YMZJ2482&f=ifr&linkID=fa56f35dfba84ea91f538e0afec8e66a&t=harveypeach01-20&tracking_id=harveypeach01-20" width={728} height={90} scrolling="no" border={0} marginWidth={0} style={{border: 'none'}} frameBorder={0} />
            <iframe className="mob-cool" src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=pd2018freetrial&banner=167WCSKF0N8EE8QDRV82&f=ifr&linkID=3ac5af4174167981e8344a5544781494&t=harveypeach01-20&tracking_id=harveypeach01-20" width={300} height={250} scrolling="no" border={0} marginWidth={0} style={{border: 'none'}} frameBorder={0} />
            {/*<a target="_blank" rel="noopener noreferrer" href="https://pokevault.com/20thAnnivCalendar?tracking=5b366aa417580"><img className="poke-vault" border={0} alt="img" src="https://pokevault.com/image/cache/201707/1524640901_20thannivcalendar1-500x500.jpg" /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://pokevault.com/PikachuFaceMug?tracking=5b366aa417580"><img className="poke-vault" border={0} alt="img" src="https://pokevault.com/image/cache/data/product-image/TablewearFood2/PokemonCenterPikachuFaceMug2013Front-500x500.jpg" /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://pokevault.com/EeveeLifesizePlushToy2018?tracking=5b366aa417580"><img className="poke-vault" border={0} alt="img" src="https://pokevault.com/image/cache/201707/1524657611_eeveelifesize2018-2-500x500.jpg" /></a>
            <a href='http://trkur3.com/335875/37110?i=423541'><img src='http://pixxur.com/335875/423541-728x90.jpg' /></a>
            <a className="desk-cool" href='http://trkur4.com/335875/26970?i=278311'><img alt="img" src='http://pixxur.com/335875/278311-728x90.jpg' /></a>
            <a className="mob-cool" href='http://trkur4.com/335875/26970?i=278307'><img alt="img" src='http://pixxur.com/335875/278307-300x250.jpg' /></a>*/}
            <div id="placementid_9504"></div>
          </div>
          <div>Buy Me A Coffee (It'll be tea cos British and all that)</div>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" defaultValue="_s-xclick" />
            <input type="hidden" name="hosted_button_id" defaultValue="CYQL3ACYFER4S" />
            <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif" border={0} name="submit" alt="PayPal – The safer, easier way to pay online!" />
            <img alt="paypal" border={0} src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width={1} height={1} />
          </form>
          <p><strong>Changes since last version:</strong>
            <br/>• Added Pokemon attract rates
            <br/>• Fixed Pokemon listing errors
            <br/>• Fixed Discord Link
            <br/>• QOL Added cursor pointer for buttons
            <br/>• Fixed incorrect expedition times on ambrosia recipes
            {/*<iframe className="strawpoll" title="strawpoll" src="https://www.strawpoll.me/embed_1/15908467">Loading poll...</iframe>*/}
            <br/>Shoutouts!:
            <br/><a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/spreadsheets/d/1UTudD9CA-ysSiYNX6iYIBEWmBbvvJiFgUCuZCm3ppWU/edit#gid=1519206697">Pokemon Attract Rates</a>
             | <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/spreadsheets/d/1sEdebcAiOmnJaNB_2JnZg7WQDtez1dwcjcLKrqWKd4Y/edit#gid=974437028">Recipe Book</a>
             | <a target="_blank" rel="noopener noreferrer" href="http://uk.ign.com/wikis/pokemon-quest">IGN Wiki</a>
             | <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/spreadsheets/d/11qzKQ_pi98Zlq5MP4IRgNveRw_IB_TJswnIPgxDKnM0/edit#gid=1531442843">Recipes DB</a>
             | <a target="_blank" rel="noopener noreferrer" href="https://www.serebii.net/quest/cooking.shtml">Serebii</a>
             | <a target="_blank" rel="noopener noreferrer" href="https://www.reddit.com/r/PokemonQuest/">Pokemon Quest Subreddit</a>
             | <a target="_blank" rel="noopener noreferrer" href="https://discordapp.com/invite/JpctMkv">Pokemon Quest Discord</a>
          </p>
        </div>
      </div>

    );
  }
}


export default App;
