import React from 'react';
import classnames from 'classnames';

import Marker from 'components/atoms/Marker';

import ProcessLine from 'images/process-line.png';

import styles from './index.css';

const ProcessDiagram02 = ({ className, activeIndex = 0, process = [], onClickItem = () => {} }) => (
	<div className={classnames(styles.processDiagram02, className)}>
		{process.map((step, index) => (
			<div
				key={step}
				className={classnames(styles.step, { [styles.active]: activeIndex === index })}
				role="button"
				tabIndex="0"
				onClick={() => onClickItem(index)}
				onKeyPress={() => {}}
			>
				<Marker className={styles.marker} active={activeIndex === index} />
				<div className={styles.label}>{step}</div>
			</div>
		))}

		<div className={styles.processLine} style={{ backgroundImage: `url(${ProcessLine})` }} />
	</div>
);

export default ProcessDiagram02;
