import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { push } from 'react-router-redux';
import moment from 'moment';

import { useRedux } from 'util/hook/redux';
import { languageMapRoute } from 'util/i18n';

export const changeLanguage = createAction('CHANGE_LANGUAGE', lang => {
	moment.locale(lang);
	document.body.setAttribute('lang', lang);
	return { lang };
});

export const changeRouteByLanguage = createAction(
	'CHANGE_ROUTE_BY_LANGUAGE',
	targetLanguage => (dispatch, getState) => {
		const {
			routing: {
				locationBeforeTransitions: { query, pathname },
			},
			i18n: { lang },
		} = getState();

		const newPathname =
			pathname !== '/'
				? pathname.replace(languageMapRoute(lang), languageMapRoute(targetLanguage))
				: `/${languageMapRoute(targetLanguage)}`;

		dispatch(push({ pathname: newPathname, query }));
	},
);

const reducer = {
	i18n: handleActions(
		{
			CHANGE_LANGUAGE: (state, action) => ({
				...state,
				lang: action.payload.lang,
			}),
		},
		{
			lang: 'en',
		},
	),
};

const selectLanguage = createSelector(
	state => state.i18n.lang,
	lang => ({ lang, routeLang: languageMapRoute(lang) }),
);

export const useLanguage = () => useRedux(selectLanguage, { changeRouteByLanguage });

export default { reducer };
