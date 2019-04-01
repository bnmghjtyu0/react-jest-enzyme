import React, { Component } from 'react';
import './App.css';
import Mock from './Button/Mock'
class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="App">
                <Mock />
            </div>
        );
    }
}

export default App;
