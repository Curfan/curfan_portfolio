import { createAction } from 'redux-actions';
import { createSelector } from 'reselect';
import { push, replace } from 'react-router-redux';

import { useRedux } from 'util/hook/redux';

export const mergeUrlQueryString = createAction(
	'MERGE_URL_QUERY_STRING',
	({ query, newPath, newHash }) => (dispatch, getState) => {
		const {
			routing: {
				locationBeforeTransitions: { pathname, query: oldQuery, hash },
			},
		} = getState();

		dispatch(
			push({
				pathname: newPath || pathname,
				hash: newHash || hash,
				query: (() => {
					const queryObject = {
						// Keep old query string
						...oldQuery,
						// Override the query string
						...query,
					};
					const returnObject = {};

					Object.keys(queryObject)
						.filter(key => queryObject[key] !== '')
						.forEach(key => {
							returnObject[key] = queryObject[key];
						});

					return returnObject;
				})(),
			}),
		);
	},
);

const selectReactRouter = createSelector(
	state => state.routing.locationBeforeTransitions,
	location => ({
		...location,
		pathnameWithoutLang:
			location.pathname.split('/').length >= 3 ? location.pathname.split('/')[2] : '',
	}),
);

export const useReactRouter = () =>
	useRedux(selectReactRouter, { push, replace, mergeUrlQueryString });
