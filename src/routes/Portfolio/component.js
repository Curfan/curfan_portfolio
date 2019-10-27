import React from 'react';
import { hot } from 'react-hot-loader/root';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';

import { SectionsContainer, Section } from 'react-fullpage';

import Page from 'layouts/Page';

import styles from './index.css';

const anchors = ['01', '02', '03'];

const Portfolio = ({ className }) => {
	const { t } = useTranslation('portfolio');

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
				<Section>{t('page1')}</Section>
				<Section>Page 2</Section>
				<Section>Page 3</Section>
			</SectionsContainer>
		</div>
	);
};

export default hot(Page({ Content: Portfolio, anchors }));
