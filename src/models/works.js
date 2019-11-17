import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { useRedux } from 'util/hook/redux';

import { wrapFirebaseRef } from 'util/api';

export const getWorks = createAction('GET_WORKS', async () => {
	try {
		const { data } = await wrapFirebaseRef('works');

		const dataObject = {};
		const keyList = data.map(d => {
			dataObject[d.key] = d;
			return d.key;
		});

		return { data: dataObject, keyList };
	} catch (error) {
		return { data: {}, keyList: [] };
	}
});

const reducer = {
	works: handleActions(
		{
			GET_WORKS_PENDING: state => ({
				...state,

				loading: true,
				error: false,
				keyList: [],
				data: [],
			}),

			GET_WORKS_FULFILLED: (state, action) => ({
				...state,

				loading: false,
				error: false,
				keyList: action.payload.keyList,
				data: action.payload.data,
			}),

			GET_WORKS_REJECTED: state => ({
				...state,

				loading: false,
				error: true,
				keyList: [],
				data: {},
			}),
		},
		{
			loading: false,
			error: false,
			keyList: [],
			data: {},
		},
	),
};

const selectWorks = createSelector(
	state => state.works.loading,
	state => state.works.error,
	state => state.works.keyList,
	state => state.works.data,
	(loading, error, keyList, data) => ({
		loading,
		error,
		keyList,
		data,
	}),
);

export const useWorks = () => useRedux(selectWorks, { getWorks });

export default { reducer };
