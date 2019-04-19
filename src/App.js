import React, { Component } from 'react';
import './App.css';
import SetProps from './SetProps/SetProps';
class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="App">
                <SetProps />

            </div>
        );
    }
}

export default App;
