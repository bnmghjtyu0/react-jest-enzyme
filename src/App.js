import React, { Component } from 'react';
import './App.css';
import Button from './Button/Button';
class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="App">
                <Button />

            </div>
        );
    }
}

export default App;
