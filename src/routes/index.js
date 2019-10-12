import React from 'react';
import { Router } from 'react-router';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';

import App from 'layouts/App';

import PortfolioRoute from './Portfolio';
import AboutRoute from './About';

const createRoutes = store => ({
	path: '/',
	component: App,
	indexRoute: {
		component: null,
		onEnter: (_, replace) => {
			replace('/portfolio');
		},
	},
	childRoutes: [PortfolioRoute(store), AboutRoute(store)],
});

const Routes = ({ store, history }) => (
	<Provider store={store}>
		<Router history={history} routes={createRoutes(store)} />
	</Provider>
);

export default hot(Routes);
