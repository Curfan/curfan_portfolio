import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { syncHistoryWithStore } from 'react-router-redux';

// A modern alternative to CSS resets
import 'normalize.css';
// Global css setting
import './global.css';

import { initi18next } from 'util/i18n';
import { detectLocalStorageSupport } from 'util/storage';

import configureStore from './store';
import { browserHistory } from './store/history';
import Routes from './routes';

const store = configureStore({});
const history = syncHistoryWithStore(browserHistory, store);
const i18n = initi18next(store);

detectLocalStorageSupport();

const Root = () => (
	<I18nextProvider i18n={i18n}>
		<Routes store={store} history={history} />
	</I18nextProvider>
);

ReactDOM.render(<Root />, document.getElementById('content'));
