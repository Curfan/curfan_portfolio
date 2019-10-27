import React from 'react';
import { hot } from 'react-hot-loader/root';
import classnames from 'classnames';

import { SectionsContainer, Section } from 'react-fullpage';

import Page from 'layouts/Page';

import styles from './index.css';

const anchors = ['01', '02', '03'];

const About = ({ className }) => {
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
		<div className={classnames(styles.about, className)}>
			<SectionsContainer className={styles.sectionContainer} {...options}>
				<Section>About me</Section>
				<Section>Curfan</Section>
				<Section>Handsome man</Section>
			</SectionsContainer>
		</div>
	);
};

export default hot(Page({ Content: About, anchors }));
