import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import { useBoolean } from 'util/hook';

import PageSection from 'components/atoms/PageSection';
import Tabs from 'components/molecules/Tabs';
import Slider from 'components/molecules/Slider';
import Card01 from 'components/molecules/Card01';

import worksData01 from 'util/data/works/ui&ux';
import worksData02 from 'util/data/works/guidelinDesign';
import worksData03 from 'util/data/works/motion';

import styles from './index.css';

const data = {
	'UI / UX': worksData01,
	'Guideline Design': worksData02,
	Motion: worksData03,
};

const PortfolioSection01 = ({ className }) => {
	const [state, setState] = useState(Object.keys(data)[0]);
	const [changeCompleted, { setTrue, setFalse }] = useBoolean();

	useEffect(() => {
		setTimeout(() => {
			setTrue();
		}, 300);
	}, [state]);

	return (
		<PageSection className={classnames(styles.portfolioSection01, className)}>
			<Tabs
				className={styles.tabs}
				tabs={Object.keys(data)}
				onTabChange={tab => {
					setFalse();
					setTimeout(() => {
						setState(tab);
					}, 300);
				}}
			/>
			<Slider
				className={classnames(styles.slider, { [styles.show]: changeCompleted })}
				slides={data[state]}
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
		</PageSection>
	);
};

export default PortfolioSection01;
