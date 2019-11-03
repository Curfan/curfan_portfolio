import React from 'react';
import classnames from 'classnames';

import styles from './index.css';

const renderDash = count => {
	const nodes = [];

	for (let i = 1; i <= count; i += 1) {
		nodes.push(<span key={i} className={classnames(styles.dash)} />);
	}

	return nodes;
};

const ProcessLine = ({ className }) => (
	<div className={classnames(styles.processLine, className)}>{renderDash(5)}</div>
);

export default ProcessLine;
