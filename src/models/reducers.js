import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import members from './member';
import blogs from './blog';

const reducers = combineReducers({
	routing: routerReducer,
	...members.reducer,
	...blogs.reducer,
});

export default reducers;
