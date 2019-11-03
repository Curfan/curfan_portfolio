import React from 'react';
import { hot } from 'react-hot-loader/root';
import classnames from 'classnames';

import PageScrollContainer from 'components/organisms/PageScrollContainer';

import Page from 'layouts/Page';
import PortfolioSection01 from 'layouts/PortfolioSection01';
import PortfolioSection02 from 'layouts/PortfolioSection02';
import PortfolioSection03 from 'layouts/PortfolioSection03';
import PortfolioSection04 from 'layouts/PortfolioSection04';
// import YoutubePlayer from 'components/atoms/YoutubePlayer';

import styles from './index.css';

const anchors = ['01', '02', '03', '04'];

const Portfolio = ({ className }) => (
	<div className={classnames(styles.portfolio, className)}>
		<PageScrollContainer anchors={anchors}>
			<PortfolioSection01 />
			<PortfolioSection02 />
			<PortfolioSection03 />
			<PortfolioSection04 />
			{/* <YoutubePlayer youtubeId="FneT5meY6s4" title="FneT5meY6s4" /> */}
		</PageScrollContainer>
	</div>
);

export default hot(Page({ Content: Portfolio, anchors }));
