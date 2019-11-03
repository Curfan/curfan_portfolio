import React, { useState, useEffect, Fragment } from 'react';
import classnames from 'classnames';

import Marker from 'components/atoms/Marker';
import ProcessLine from 'components/atoms/ProcessLine';

import styles from './index.css';

const ProcessDiagram = ({ className, process = [], onProcessChange = () => {} }) => {
	const [state, setState] = useState(0);

	useEffect(() => {
		onProcessChange(state);
	}, [state]);

	return (
		<div className={classnames(styles.processDiagram, className)}>
			{process.map((step, index) => (
				<Fragment key={step}>
					<div
						className={classnames(styles.step, { [styles.active]: state === index })}
						role="button"
						tabIndex="0"
						onClick={() => setState(index)}
						onKeyPress={() => {}}
					>
						<Marker active={state === index} />
						<div className={styles.label}>{step}</div>
					</div>
					{index !== process.length - 1 && <ProcessLine className={styles.processLine} />}
				</Fragment>
			))}
		</div>
	);
};

export default ProcessDiagram;
