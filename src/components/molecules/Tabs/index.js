import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';

import styles from './index.css';

const Tabs = ({ className, tabs = [], onTabChange = () => {} }) => {
	const refWrapper = useRef(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const [activeBarWidth, setActiveBarWidth] = useState(0);
	const [activeTabOffset, setActiveTabOffset] = useState(0);

	useEffect(() => {
		const { x: baseX } = refWrapper.current.children[0].getBoundingClientRect();
		const { width, x } = refWrapper.current.children[activeIndex].getBoundingClientRect();
		onTabChange(activeIndex);
		setActiveBarWidth(width);
		setActiveTabOffset(x - baseX);
	}, [activeIndex]);

	const onClickHandler = index => {
		if (index === activeIndex) {
			return;
		}

		setActiveIndex(index);
	};

	return (
		<div className={classnames(styles.tabs, className)}>
			<div ref={refWrapper} className={styles.wrapper}>
				{tabs.map((tab, index) => (
					<div
						key={tab}
						className={classnames(styles.tab, { [styles.active]: activeIndex === index })}
						role="button"
						tabIndex="0"
						onClick={() => onClickHandler(index)}
						onKeyPress={() => {}}
					>
						{tab}
					</div>
				))}
			</div>
			<span
				className={styles.activeBar}
				style={{ width: `${activeBarWidth}px`, transform: `translateX(${activeTabOffset}px)` }}
			/>
		</div>
	);
};

export default Tabs;
