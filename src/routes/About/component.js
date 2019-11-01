import React from 'react';
import { hot } from 'react-hot-loader/root';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';

import PageScrollContainer from 'components/organisms/PageScrollContainer';

import Page from 'layouts/Page';

import styles from './index.css';

const anchors = ['01', '02', '03'];

const Section = ({ className, children }) => (
	<div className={classnames(styles.pageSection, className)}>{children}</div>
);

const About = ({ className }) => {
	const { t } = useTranslation('about');

	return (
		<div className={classnames(styles.about, className)}>
			<PageScrollContainer anchors={anchors}>
				<Section>{t('me')}</Section>
				<Section>Curfan</Section>
				<Section>Handsome man</Section>
			</PageScrollContainer>
		</div>
	);
};

export default hot(Page({ Content: About, anchors }));
