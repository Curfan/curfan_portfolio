export default () => ({
	path: 'about',
	indexRoute: {
		getComponent: (nextState, cb) =>
			require.ensure(
				[],
				require => {
					const component = require('./component').default;
					cb(null, component);
				},
				'About',
			),
	},
});
