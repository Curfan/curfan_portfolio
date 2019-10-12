import React from 'react';
import classnames from 'classnames';

import styles from './index.css';

const Card01 = ({ className, photo, title, description }) => (
	<div className={classnames(styles.card01, className)}>
		<img src={photo} alt="work" />
		<div className={styles.title}>{title}</div>
		<div className={styles.description}>{description}</div>
	</div>
);

export default Card01;
