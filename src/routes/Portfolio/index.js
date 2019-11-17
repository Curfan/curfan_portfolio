import { getWorks } from 'models/works';
import { getExperience } from 'models/experience';

export default store => ({
	path: 'portfolio',
	indexRoute: {
		getComponent: (nextState, cb) =>
			require.ensure(
				[],
				require => {
					const component = require('./component').default;
					cb(null, component);
				},
				'Portfolio',
			),
		onEnter: () => {
			store.dispatch(getWorks());
			store.dispatch(getExperience());
		},
	},
});
