import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import i18n from './i18n';

const reducers = combineReducers({
	routing: routerReducer,
	...i18n.reducer,
});

export default reducers;
