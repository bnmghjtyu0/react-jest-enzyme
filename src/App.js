import React, { Component } from 'react';
import './App.css';
import Modal from './Modal/Modal'
class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="App">
                <Modal />
            </div>
        );
    }
}

export default App;
