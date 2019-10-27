import React from 'react';

import { useNewTimer } from 'util/timer';

import Navigation from 'components/molecules/Navigation';

import IconLogo from 'images/icon/logo.inline.svg';

import styles from './index.css';

const Header = () => {
	const timer = useNewTimer();

	return (
		<header className={styles.header}>
			<IconLogo />
			<Navigation />
			<div className={styles.timer}>{timer}</div>
		</header>
	);
};

export default Header;
