import React from 'react';
import { hot } from 'react-hot-loader/root';

import { SectionsContainer, Section } from 'react-fullpage';

import styles from './index.css';

const Portfolio = () => {
	const anchors = ['01', '02', '03'];

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
		<div className={styles.portfolio}>
			<div className={styles.navigationBar}>
				{anchors.map(item => (
					<a key={item} href={`#${item}`} className={styles.item}>
						<span className={styles.label}>{item}</span>
						<span className={styles.bar} />
					</a>
				))}
			</div>
			<SectionsContainer className={styles.sectionContainer} {...options}>
				<Section>Page 1</Section>
				<Section>Page 2</Section>
				<Section>Page 3</Section>
			</SectionsContainer>
		</div>
	);
};

export default hot(Portfolio);
