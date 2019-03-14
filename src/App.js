import React, { Component } from 'react';
import './App.css';
import Button from './Button/Button';
import ArrayMap from './Array/arrayMap'
class App extends Component {
    constructor(props) {
        super(props)
    }
    handleClose = () => {
        console.log(123)
    }
    render() {
        return (
            <div className="App">
                <Button onClose={this.handleClose}>123</Button>
                <ArrayMap />
            </div>
        );
    }
}

export default App;
