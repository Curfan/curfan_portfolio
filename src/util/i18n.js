import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { changeLanguage } from 'models/i18n';

import resources from './resources';
import { getLanguageLocalStorage } from './storage';

const MAPPING_LANGUAGE = {
	'zh-tw': 'zh-TW',
	en: 'en',
};

export const LANGUAGE_OPTIONS = [
	{
		label: 'English',
		value: 'en',
	},
	{
		label: '繁中',
		value: 'zh-TW',
	},
];

export const mapLanguageName = lang => {
	const [name = 'English'] = LANGUAGE_OPTIONS.filter(item => item.value === lang).map(
		item => item.label,
	);

	return name;
};

export const isLanguageSupportWithRoute = route => Object.keys(MAPPING_LANGUAGE).includes(route);

export const routeMapLanguage = route => {
	const [lang = 'en'] = Object.keys(MAPPING_LANGUAGE)
		.filter(key => key === route)
		.map(key => MAPPING_LANGUAGE[key]);

	return lang;
};

export const languageMapRoute = lang => {
	const [route = 'en'] = Object.keys(MAPPING_LANGUAGE).filter(
		key => MAPPING_LANGUAGE[key] === lang,
	);

	return route;
};

const languageDetect = {
	name: 'urlDetect',

	lookup() {
		const pathnames = window.location.pathname.split('/');

		if (pathnames.length >= 2) {
			return routeMapLanguage(pathnames[1]);
		}

		return 'en';
	},
};

export const initi18next = store => {
	const lngDetector = new LanguageDetector();
	// Setup Custom detector;
	lngDetector.addDetector(languageDetect);

	i18n
		.use(lngDetector)
		.use(initReactI18next)
		.init(
			{
				fallbackLng: 'en',

				// have a common namespace used around the full app
				ns: ['common'],
				defaultNS: 'common',

				debug: process.env.NODE_ENV !== 'production',

				interpolation: {
					escapeValue: false, // not needed for react!!
				},

				detection: {
					order: ['urlDetect', 'localStorage', 'cookie', 'navigator', 'htmlTag'],
					lookupLocalStorage: getLanguageLocalStorage(),
				},

				caches: ['localStorage'],

				resources,
			},
			() => {
				store.dispatch(changeLanguage(i18n.language));
			},
		);

	i18n.on('languageChanged', () => {
		store.dispatch(changeLanguage(i18n.language));
	});

	return i18n;
};

export const changeLng = lng => i18n.changeLanguage(lng);

export const getLanguage = () => i18n.language;

export const t = (keys, options) => i18n.t(keys, options);
