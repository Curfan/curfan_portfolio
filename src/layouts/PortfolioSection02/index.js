import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';

import PageSection from 'components/atoms/PageSection';
import Title from 'components/atoms/Title';

import introduction from 'images/introduction.png';

import styles from './index.css';

const PortfolioSection02 = ({ className }) => {
	const { t } = useTranslation('portfolioSection02');

	return (
		<PageSection className={classnames(styles.portfolioSection02, className)}>
			<div className={styles.infoWrapper}>
				<Title className={styles.title} subtitle withTail>
					{t('title')}
				</Title>
				<div className={styles.text} dangerouslySetInnerHTML={{ __html: t('text') }} />
			</div>
			<div className={styles.imageWrapper}>
				<img className={styles.image} src={introduction} alt="" />
			</div>
		</PageSection>
	);
};

export default PortfolioSection02;
