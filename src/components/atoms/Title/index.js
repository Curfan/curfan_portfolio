import React from 'react';
import classnames from 'classnames';

import TailIcon from 'images/icon/tail.inline.svg';

import styles from './index.css';

const Title = ({ className, subtitle, withTail, children }) => (
	<div className={classnames(styles.title, className, { [styles.subtitle]: subtitle })}>
		{children}
		{withTail && <TailIcon className={styles.tail} />}
	</div>
);

export default Title;
