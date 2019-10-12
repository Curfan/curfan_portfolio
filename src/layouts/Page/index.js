import React from 'react';

import Header from 'components/organisms/Header';

const PageLayout = ({ Content }) => () => (
	<>
		<Header />
		<Content />
	</>
);

export default PageLayout;
