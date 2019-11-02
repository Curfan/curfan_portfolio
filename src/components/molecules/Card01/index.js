import React from 'react';
import classnames from 'classnames';

import styles from './index.css';

const Card01 = ({ className, photo, title, description }) => (
	<div className={classnames(styles.card01, className)}>
		<div
			className={styles.image}
			style={{
				backgroundImage: `url(${photo})`,
			}}
		/>
		<div className={styles.title}>{title}</div>
		<div className={styles.description}>{description}</div>
	</div>
);

export default Card01;
