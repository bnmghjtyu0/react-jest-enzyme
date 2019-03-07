import React, { Component } from 'react';
import './App.css';
import Button from './Button/Button';
import Congrats from './Congrats/Congrats';
import GuessedWords from './GuessedWords/GuessedWords';
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
                <Congrats success={true} />
                <GuessedWords
                    guessedWords={
                        [{ guessedWord: 'train', letterMatchCount: 3 }]
                    }
                />
            </div>
        );
    }
}

export default App;
