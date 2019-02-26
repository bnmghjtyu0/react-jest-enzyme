import React, { Component } from 'react';
import './App.css';
import Congrats from './Congrats/Congrats';
import GuessedWords from './GuessedWords/GuessedWords';
class App extends Component {
    render() {
        return (
            <div className="App">
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
