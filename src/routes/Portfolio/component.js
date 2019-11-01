import React from 'react';
import { hot } from 'react-hot-loader/root';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';

import PageScrollContainer from 'components/organisms/PageScrollContainer';

import Page from 'layouts/Page';

import styles from './index.css';

const anchors = ['01', '02', '03', '04'];

const Section = ({ className, children }) => (
	<div className={classnames(styles.pageSection, className)}>{children}</div>
);

const Portfolio = ({ className }) => {
	const { t } = useTranslation('portfolio');

	return (
		<div className={classnames(styles.portfolio, className)}>
			<PageScrollContainer anchors={anchors}>
				<Section>{t('page1')}</Section>
				<Section>test 2</Section>
				<Section>test 3</Section>
				<Section>test 4</Section>
			</PageScrollContainer>
		</div>
	);
};

export default hot(Page({ Content: Portfolio, anchors }));
