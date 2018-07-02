import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './app.css';

import Game from '../containers/Game'
import AppHeader from './AppHeader';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App container">
                    <AppHeader/>
                    <Switch>
                        <Route path="/" exact component={Game}/>
                    </Switch>

                </div>
            </Router>
        );
    }
}

export default App;