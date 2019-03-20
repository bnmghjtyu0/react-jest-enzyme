import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
// const Home = React.lazy(() => import('./views/Home/index'))
import Home from './views/Home/index'
import About from './views/About/index'
class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Switch>
                            <Route exact path="/" component={props => <Home {...props} />} />
                            <Route path="/about" component={props => <About {...props} />} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
