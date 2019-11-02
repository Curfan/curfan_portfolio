import React from 'react';
import { hot } from 'react-hot-loader/root';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';

import PageSection from 'components/atoms/PageSection';
import PageScrollContainer from 'components/organisms/PageScrollContainer';

import Page from 'layouts/Page';

import styles from './index.css';

const anchors = ['01', '02', '03'];

const About = ({ className }) => {
	const { t } = useTranslation('about');

	return (
		<div className={classnames(styles.about, className)}>
			<PageScrollContainer anchors={anchors}>
				<PageSection>{t('me')}</PageSection>
				<PageSection>Curfan</PageSection>
				<PageSection>Handsome man</PageSection>
			</PageScrollContainer>
		</div>
	);
};

export default hot(Page({ Content: About, anchors }));
