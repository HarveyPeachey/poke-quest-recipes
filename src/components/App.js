import React, { Component } from 'react';
import TypeList from './TypeList';
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
            </div>
        );
    }
}


export default App;