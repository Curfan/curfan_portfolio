import React from 'react';
import { hot } from 'react-hot-loader/root';

import PageLayout from 'layouts/Page';
import SwitchList from 'components/molecules/SwitchList';

import { useBlog } from 'models/blog';

const PageContent = () => {
	const [{ posts }, { getBlogs, cleanBlogs }] = useBlog();

	return (
		<SwitchList
			onOpen={getBlogs}
			onClose={cleanBlogs}
			items={posts.map(post => ({ key: post.pID, value: post.title }))}
		/>
	);
};

const Blogs = PageLayout({
	PageHeader: "Blog's page",
	PageContent,
});

Blogs.displayName = 'Blogs';

export default hot(Blogs);
