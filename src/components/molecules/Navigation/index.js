import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

import { useReactRouter } from 'models/route';
import { useLanguage } from 'models/i18n';

import styles from './index.css';

const Navigation = () => {
	const [{ pathnameWithoutLang }] = useReactRouter();
	const [{ routeLang }] = useLanguage();

	return (
		<nav className={styles.navigation}>
			<ul>
				<li>
					<Link
						className={classnames(styles.item, {
							[styles.active]: pathnameWithoutLang === 'portfolio',
						})}
						to={`/${routeLang}/portfolio`}
					>
						<div className={styles.icon} />
						<span className={styles.label}>Portfolio</span>
					</Link>
				</li>
				<li>
					<Link
						className={classnames(styles.item, {
							[styles.active]: pathnameWithoutLang === 'about',
						})}
						to={`/${routeLang}/about`}
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
					<Link className={classnames(styles.item)} to={`/${routeLang}/`}>
						<div className={styles.icon} />
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
