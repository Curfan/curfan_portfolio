import React from 'react';

import { useNewTimer } from 'util/timer';

import Navigation from 'components/molecules/Navigation';

import styles from './index.css';

const Header = () => {
	const timer = useNewTimer();

	return (
		<header className={styles.header}>
			<h2>C</h2>
			<Navigation />
			<div className={styles.timer}>{timer}</div>
		</header>
	);
};

export default Header;
