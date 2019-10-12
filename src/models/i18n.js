import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import moment from 'moment';

import { useRedux } from 'util/hook/redux';
import { languageMapRoute } from 'util/i18n';

export const changeLanguage = createAction('CHANGE_LANGUAGE', lang => {
	moment.locale(lang);
	document.body.setAttribute('lang', lang);
	return { lang };
});

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

export const useLanguage = () => useRedux(selectLanguage);

export default { reducer };
