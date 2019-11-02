import React from 'react';
import { hot } from 'react-hot-loader/root';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';

import PageScrollContainer from 'components/organisms/PageScrollContainer';
import Slider from 'components/molecules/Slider';
import Card01 from 'components/molecules/Card01';

import Page from 'layouts/Page';

import worksData from 'util/data/works/ui&ux';

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
				<Section>
					<Slider
						slides={worksData}
						SlideComponent={Card01}
						config={{
							breakpoints: {
								600: {
									slidesPerView: 2,
									spaceBetween: 24,
								},
								900: {
									slidesPerView: 3,
									spaceBetween: 48,
								},
								1200: {
									slidesPerView: 4,
									spaceBetween: 64,
								},
							},
						}}
					/>
				</Section>
				<Section>{t('page1')}</Section>
				<Section>test 3</Section>
				<Section>test 4</Section>
			</PageScrollContainer>
		</div>
	);
};

export default hot(Page({ Content: Portfolio, anchors }));
