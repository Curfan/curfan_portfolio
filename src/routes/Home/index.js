import React from 'react';
import { hot } from 'react-hot-loader/root';
import { useTranslation } from 'react-i18next';

import styles from './index.css';

const Home = () => {
	const { t } = useTranslation('home');

	return <div className={styles.home}>{t('title')}</div>;
};

export default hot(Home);
