import { createStore, applyMiddleware, compose } from 'redux';

import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk-fsa';
import { routerMiddleware } from 'react-router-redux';

import reducers from 'models/reducers';

import { browserHistory } from './history';

const reduxRouterMiddleware = routerMiddleware(browserHistory);

const middlewares = [reduxRouterMiddleware, thunkMiddleware, promiseMiddleware];
let composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production') {
	const { createLogger } = require('redux-logger'); // eslint-disable-line global-require
	middlewares.push(createLogger());
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default function configureStore(preState) {
	const store = createStore(reducers, preState, composeEnhancers(applyMiddleware(...middlewares)));

	if (module.hot) {
		module.hot.accept('../models/reducers', () => {
			const nextReducers = require('../models/reducers').default; // eslint-disable-line global-require
			store.replaceReducer(nextReducers);
		});
	}

	return store;
}
