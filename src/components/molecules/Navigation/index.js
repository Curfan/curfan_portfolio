import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

import { useReactRouter } from 'models/route';

import styles from './index.css';

const Navigation = () => {
	const [{ pathname }] = useReactRouter();

	return (
		<nav className={styles.navigation}>
			<ul>
				<li>
					<Link
						className={classnames(styles.item, { [styles.active]: pathname === '/portfolio' })}
						to="/portfolio"
					>
						<div className={styles.icon} />
						<span className={styles.label}>Portfolio</span>
					</Link>
				</li>
				<li>
					<Link
						className={classnames(styles.item, { [styles.active]: pathname === '/about' })}
						to="/about"
					>
						<div className={styles.icon} />
						<span className={styles.label}>About</span>
					</Link>
				</li>
				<li>
					<div className={classnames(styles.item)}>
						<div className={styles.icon} />
					</div>
				</li>
				<li>
					<div className={classnames(styles.item)}>
						<div className={styles.icon} />
					</div>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
