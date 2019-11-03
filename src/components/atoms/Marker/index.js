import React from 'react';
import classnames from 'classnames';

import styles from './index.css';

const Marker = ({ className, active = false }) => (
	<div className={classnames(styles.marker, className, { [styles.active]: active })}>
		<span />
	</div>
);

export default Marker;
