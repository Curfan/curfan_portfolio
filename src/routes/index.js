import React from 'react';
import { Router } from 'react-router';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';

import { isLanguageSupportWithRoute, languageMapRoute } from 'util/i18n';

import App from 'layouts/App';

import PortfolioRoute from './Portfolio';
import AboutRoute from './About';

const createRoutes = store => ({
	path: '/',
	component: App,
	indexRoute: {
		component: null,
		onEnter: async (_, replace, callback) => {
			const {
				i18n: { lang },
			} = store.getState();

			replace(`/${languageMapRoute(lang)}/`);

			callback();
		},
	},
	childRoutes: [
		{
			path: ':lang',
			indexRoute: {
				getComponent: (nextState, cb) =>
					require.ensure(
						[],
						require => {
							const component = require('./Home').default;
							cb(null, component);
						},
						'Home',
					),
			},
			onEnter: async ({ params: { lang: urlLang }, location: { pathname } }, replace, callback) => {
				const {
					i18n: { lang },
				} = store.getState();

				if (!isLanguageSupportWithRoute(urlLang)) {
					replace(`/${languageMapRoute(lang)}/${pathname.split('/')[1]}`);
				}

				callback();
			},
			childRoutes: [
				PortfolioRoute(store),
				AboutRoute(store),
				{
					path: '*', // Should be 404 page
					component: null,
					indexRoute: {
						component: null,
						onEnter: () => {},
					},
					onEnter: (_, replace) => replace('/'),
				},
			],
		},
		{
			path: '*',
			component: null,
			indexRoute: {
				component: null,
				onEnter: () => {},
			},
			onEnter: ({ location: { pathname } }, replace) => {
				const {
					i18n: { lang },
				} = store.getState();
				replace(`/${languageMapRoute(lang)}${pathname}`);
			},
		},
	],
});

const Routes = ({ store, history }) => (
	<Provider store={store}>
		<Router history={history} routes={createRoutes(store)} />
	</Provider>
);

export default hot(Routes);
