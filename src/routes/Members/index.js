import { getMembers, cleanMembers } from 'models/member';

export default store => ({
	path: 'members',
	indexRoute: {
		getComponent: (nextState, cb) =>
			require.ensure(
				[],
				require => {
					const component = require('./component').default;
					cb(null, component);
				},
				'Members',
			),
		onEnter: () => {
			store.dispatch(cleanMembers());
			store.dispatch(getMembers());
		},
	},
});
