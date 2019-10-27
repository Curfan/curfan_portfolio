import React from 'react';
import { hot } from 'react-hot-loader/root';
import classnames from 'classnames';

import { SectionsContainer, Section } from 'react-fullpage';

import Page from 'layouts/Page';

import styles from './index.css';

const anchors = ['01', '02', '03'];

const Portfolio = ({ className }) => {
	const options = {
		sectionClassName: 'section',
		anchors,
		scrollBar: false,
		navigation: false,
		verticalAlign: false,
		sectionPaddingTop: '120px',
		sectionPaddingBottom: '50px',
	};

	return (
		<div className={classnames(styles.portfolio, className)}>
			<SectionsContainer className={styles.sectionContainer} {...options}>
				<Section>Page 1</Section>
				<Section>Page 2</Section>
				<Section>Page 3</Section>
			</SectionsContainer>
		</div>
	);
};

export default hot(Page({ Content: Portfolio, anchors }));
