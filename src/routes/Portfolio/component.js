import React from 'react';
import { hot } from 'react-hot-loader/root';
import classnames from 'classnames';

import PageSection from 'components/atoms/PageSection';
import PageScrollContainer from 'components/organisms/PageScrollContainer';

import Page from 'layouts/Page';
import PortfolioSection01 from 'layouts/PortfolioSection01';
import PortfolioSection02 from 'layouts/PortfolioSection02';
// import YoutubePlayer from 'components/atoms/YoutubePlayer';

import styles from './index.css';

const anchors = ['01', '02', '03', '04'];

const Portfolio = ({ className }) => (
	<div className={classnames(styles.portfolio, className)}>
		<PageScrollContainer anchors={anchors}>
			<PortfolioSection01 />
			<PortfolioSection02 />
			{/* <YoutubePlayer youtubeId="FneT5meY6s4" title="FneT5meY6s4" /> */}
			<PageSection>test 3</PageSection>
			<PageSection>test 4</PageSection>
		</PageScrollContainer>
	</div>
);

export default hot(Page({ Content: Portfolio, anchors }));
