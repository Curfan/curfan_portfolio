import { createSelector } from 'reselect';
import { push, replace } from 'react-router-redux';

import { useRedux } from 'util/hook/redux';

const selectReactRouter = createSelector(
	state => state.routing.locationBeforeTransitions,
	location => location,
);

export const useReactRouter = () => useRedux(selectReactRouter, { push, replace });
