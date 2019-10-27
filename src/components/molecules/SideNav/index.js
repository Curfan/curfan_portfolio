import React from 'react';
import classnames from 'classnames';

import { useReactRouter } from 'models/route';

import styles from './index.css';

const SideNav = ({ className, anchors }) => {
	const [{ hash }] = useReactRouter();

	return (
		<div className={classnames(styles.sideNav, className)}>
			{anchors.map(item => (
				<a
					key={item}
					href={`#${item}`}
					className={classnames(styles.item, { active: hash === `#${item}` })}
				>
					<span className={styles.label}>{item}</span>
					<span className={styles.bar} />
				</a>
			))}
		</div>
	);
};

export default SideNav;
