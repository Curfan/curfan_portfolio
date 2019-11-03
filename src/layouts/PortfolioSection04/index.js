import React, { useRef, useState } from 'react';
import classnames from 'classnames';

import PageSection from 'components/atoms/PageSection';
import Slider from 'components/molecules/Slider';
import Card02 from 'components/molecules/Card02';
import ProcessDiagram02 from 'components/molecules/ProcessDiagram02';

import experienceData from 'util/data/experience';

import ArrowRightIcon from 'images/icon/circle-arrow-right.inline.svg';
import ArrowLefttIcon from 'images/icon/circle-arrow-left.inline.svg';

import styles from './index.css';

const PortfolioSection04 = ({ className }) => {
	const ref = useRef(null);
	const [activeIndex, setState] = useState(0);

	const onClickNavHandler = nav => {
		if (nav > 0) {
			ref.current.slideNext();

			return;
		}

		ref.current.slidePrev();
	};

	const onClickStepHandler = index => {
		if (ref.current) {
			ref.current.slideToLoop(index);
		}
	};

	return (
		<PageSection className={classnames(styles.portfolioSection04, className)}>
			<div className={styles.sliderWrapper}>
				<ArrowLefttIcon
					className={classnames(styles.navigator, styles.left)}
					role="button"
					tabIndex="0"
					onClick={() => onClickNavHandler(-1)}
					onKeyPress={() => {}}
				/>
				<Slider
					ref={ref}
					className={styles.slider}
					slides={experienceData}
					SlideComponent={Card02}
					config={{ spaceBetween: 80, loop: true }}
					onChange={setState}
				/>
				<ArrowRightIcon
					className={classnames(styles.navigator, styles.right)}
					role="button"
					tabIndex="0"
					onClick={() => onClickNavHandler(1)}
					onKeyPress={() => {}}
				/>
			</div>
			<ProcessDiagram02
				process={experienceData.map(({ name }) => name)}
				onClickItem={onClickStepHandler}
				activeIndex={activeIndex}
			/>
		</PageSection>
	);
};

export default PortfolioSection04;
