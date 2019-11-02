import React from 'react';
import { hot } from 'react-hot-loader/root';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';

import PageSection from 'components/atoms/PageSection';
import PageScrollContainer from 'components/organisms/PageScrollContainer';

import Page from 'layouts/Page';
import PortfolioSection01 from 'layouts/PortfolioSection01';

import styles from './index.css';

const anchors = ['01', '02', '03', '04'];

const Portfolio = ({ className }) => {
	const { t } = useTranslation('portfolio');

	return (
		<div className={classnames(styles.portfolio, className)}>
			<PageScrollContainer anchors={anchors}>
				<PortfolioSection01 />
				<PageSection>{t('page1')}</PageSection>
				<PageSection>test 3</PageSection>
				<PageSection>test 4</PageSection>
			</PageScrollContainer>
		</div>
	);
};

export default hot(Page({ Content: Portfolio, anchors }));
