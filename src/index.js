import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import cryptoApp from './reduxconfig/store';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import Home from './pages/home/home';

let store = createStore(
	cryptoApp,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const Root = () => {
	return (
		<Provider store={store}>
			<Router>
				<App>
					<Route exact path="/" render={(props) => <Home {...props} />} />
				</App>
			</Router>
		</Provider>
	)
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
