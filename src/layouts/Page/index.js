import React from 'react';

import Header from 'components/organisms/Header';
import SideNav from 'components/molecules/SideNav';

const PageLayout = ({ Content, anchors }) => () => (
	<>
		<Header />
		<SideNav anchors={anchors} />
		<Content />
	</>
);

export default PageLayout;
