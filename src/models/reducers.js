import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import i18n from './i18n';
import work from './works';
import experience from './experience';

const reducers = combineReducers({
	routing: routerReducer,
	...i18n.reducer,
	...work.reducer,
	...experience.reducer,
});

export default reducers;
