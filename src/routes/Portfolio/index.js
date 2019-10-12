export default () => ({
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
	},
});
