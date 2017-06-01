import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import {CSSTransitionGroup} from 'react-transition-group';
import cryptoApp from './reduxconfig/store';

import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import App from './App';
import Home from './pages/home/home';
import About from './pages/about/about';

let store = createStore(
	cryptoApp,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Root = () => {
	return (
			<Provider store={store}>
				<div>
					<Router>
						<Route render={({location}) => {
							return (
							<App>
								<CSSTransitionGroup
									transitionName="pageSwap"
									transitionEnterTimeout={1000}
									transitionLeaveTimeout={1000}>
									<Switch key={location.pathname} location={location}>
										<Route exact path="/" component={Home}/>
										<Route path="/about" component={About}/>
									</Switch>
								</CSSTransitionGroup>
							</App>
							)
						}}>
						</Route>
					</Router>
				</div>
			</Provider>
	)
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
