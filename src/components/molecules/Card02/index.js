import React from 'react';
import classnames from 'classnames';

import styles from './index.css';

const Card02 = ({ className, photo, name, title, time, notes = [] }) => (
	<div className={classnames(styles.card02, className)}>
		<div className={styles.wrapper}>
			<div className={styles.imageWrapper}>
				<div
					className={styles.image}
					style={{
						backgroundImage: `url(${photo})`,
					}}
				/>
			</div>
			<div className={styles.content}>
				<div className={styles.name}>{name}</div>
				<div className={styles.title}>{title}</div>
				<div className={styles.description}>{time}</div>
				<div className={styles.notes}>
					{notes.map(note => (
						<div key={note} className={styles.note}>
							{note}
						</div>
					))}
				</div>
			</div>
		</div>
	</div>
);

export default Card02;
