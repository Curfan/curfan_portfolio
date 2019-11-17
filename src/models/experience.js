import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { useRedux } from 'util/hook/redux';

import { wrapFirebaseRef } from 'util/api';

export const getExperience = createAction('GET_EXPERIENCE', async () => {
	try {
		const { data } = await wrapFirebaseRef('experience');

		return data;
	} catch (error) {
		return [];
	}
});

const reducer = {
	experience: handleActions(
		{
			GET_EXPERIENCE_PENDING: state => ({
				...state,

				loading: true,
				error: false,
				data: [],
			}),

			GET_EXPERIENCE_FULFILLED: (state, action) => ({
				...state,

				loading: false,
				error: false,
				data: action.payload,
			}),

			GET_EXPERIENCE_REJECTED: state => ({
				...state,

				loading: false,
				error: true,
				data: [],
			}),
		},
		{
			loading: false,
			error: false,
			data: [],
		},
	),
};

const selectExperience = createSelector(
	state => state.experience.loading,
	state => state.experience.error,
	state => state.experience.data,
	(loading, error, data) => ({
		loading,
		error,
		data,
	}),
);

export const useExperience = () => useRedux(selectExperience, { getExperience });

export default { reducer };
