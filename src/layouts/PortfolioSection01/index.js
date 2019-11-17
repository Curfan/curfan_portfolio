import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import { useBoolean } from 'util/hook';

import { useWorks } from 'models/works';

import PageSection from 'components/atoms/PageSection';
import Tabs from 'components/molecules/Tabs';
import Slider from 'components/molecules/Slider';
import Card01 from 'components/molecules/Card01';
import SocialMedia from 'components/molecules/SocialMedia';

import styles from './index.css';

const PortfolioSection01 = ({ className }) => {
	const [{ loading, keyList, data }] = useWorks();
	const [activeIndex, setActiveIndex] = useState(0);
	const [changeCompleted, { setTrue, setFalse }] = useBoolean();

	useEffect(() => {
		setTimeout(() => {
			setTrue();
		}, 300);
	}, [activeIndex]);

	return (
		<PageSection className={classnames(styles.portfolioSection01, className)}>
			{!loading && keyList.length > 0 && data[keyList[activeIndex]] && (
				<>
					<Tabs
						className={styles.tabs}
						tabs={keyList}
						onTabChange={i => {
							if (i !== activeIndex) {
								setFalse();
								setTimeout(() => {
									setActiveIndex(i);
								}, 300);
							}
						}}
					/>
					<Slider
						className={classnames(styles.slider, { [styles.show]: changeCompleted })}
						slides={data[keyList[activeIndex]].data}
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
					<SocialMedia />
				</>
			)}
		</PageSection>
	);
};

export default PortfolioSection01;
