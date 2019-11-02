import React from 'react';
import classnames from 'classnames';

import styles from './index.css';

const PageSection = ({ className, children }) => (
	<div className={classnames(styles.pageSection, className)}>{children}</div>
);

export default PageSection;
