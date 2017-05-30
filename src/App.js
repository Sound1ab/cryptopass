import React, {Component} from 'react';
import {Provider} from 'react-redux';
import { createStore } from 'redux'
import cryptoApp from './reduxconfig/store';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import './assets/scss/App.css';

import Home from './pages/home/home';

let store = createStore(
    cryptoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Route exact path="/" component={Home}/>
                </Router>
            </Provider>
        );
    }
}

export default App;
