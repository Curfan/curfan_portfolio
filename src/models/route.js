import { createSelector } from 'reselect';
import { push, replace } from 'react-router-redux';

import { useRedux } from 'util/hook/redux';

const selectReactRouter = createSelector(
	state => state.routing.locationBeforeTransitions,
	location => ({
		...location,
		pathnameWithoutLang:
			location.pathname.split('/').length >= 4 ? location.pathname.split('/')[3] : '',
	}),
);

export const useReactRouter = () => useRedux(selectReactRouter, { push, replace });
