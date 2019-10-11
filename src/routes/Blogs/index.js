import { getBlogs, cleanBlogs } from 'models/blog';

export default store => ({
	path: 'blogs',
	indexRoute: {
		getComponent: (nextState, cb) =>
			require.ensure(
				[],
				require => {
					const component = require('./component').default;
					cb(null, component);
				},
				'Blogs',
			),
		onEnter: () => {
			store.dispatch(cleanBlogs());
			store.dispatch(getBlogs());
		},
	},
});
