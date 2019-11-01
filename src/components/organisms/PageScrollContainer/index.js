import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import { useReactRouter } from 'models/route';

import styles from './index.css';

const PageScrollContainer = ({ className, anchors = [], children, onPageChange = () => {} }) => {
	const [{ hash }, { mergeUrlQueryString }] = useReactRouter();
	const [activePageIndex, setActivePagesIndex] = useState(0);
	const [scrolling, setState] = useState(false);

	// mapping anchorId with index
	const ANCHOR_INDEX_MAP = {};
	anchors.forEach((anchorId, index) => {
		ANCHOR_INDEX_MAP[anchorId] = index;
	});

	const [pages, setPages] = useState(0);
	useEffect(() => {
		setPages(React.Children.count(children));
	}, []);

	// binding some props on children elements
	const childrenWithProps = React.Children.map(children, (child, index) =>
		React.cloneElement(child, {
			className: styles.page,
			anchorId: anchors[index] ? anchors[index] : '',
		}),
	);

	useEffect(() => {
		const urlAnchor = hash && hash.split('#')[1];

		if (!anchors.includes(urlAnchor)) {
			return;
		}

		setActivePagesIndex(ANCHOR_INDEX_MAP[urlAnchor]);
	}, [hash]);

	useEffect(() => {
		onPageChange(activePageIndex);
	}, [activePageIndex]);

	const scrollPage = nav => {
		if (activePageIndex + nav >= 0 && activePageIndex + nav < pages) {
			setActivePagesIndex(activePageIndex + nav);
			mergeUrlQueryString({ newHash: `#${anchors[activePageIndex + nav]}` });
		}
	};

	const handleMouseWheel = ({ deltaY }) => {
		if (scrolling) {
			return;
		}

		setState(true);
		scrollPage(deltaY < 0 ? -1 : 1);
		setTimeout(() => {
			setState(false);
		}, 1500);
	};

	return (
		<div className={classnames(styles.pageScrollContainer, className)} onWheel={handleMouseWheel}>
			<div
				className={classnames(styles.wrapper)}
				style={{ transform: `translate3d(0, -${activePageIndex * 100}%, 0)` }}
			>
				{childrenWithProps}
			</div>
		</div>
	);
};

export default PageScrollContainer;
