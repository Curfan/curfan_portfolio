import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { useTranslation } from 'react-i18next';

import { useReactRouter } from 'models/route';
import { useLanguage } from 'models/i18n';
import { useKeyPress } from 'util/event';

import Waves from 'components/atoms/Waves';

import styles from './index.css';

const Home = () => {
	const { t } = useTranslation('home');

	const [, { replace }] = useReactRouter();
	const [{ routeLang }] = useLanguage();
	const keyPress = useKeyPress();

	useEffect(() => {
		if (keyPress) {
			replace(`/${routeLang}/portfolio`);
		}
	}, [keyPress]);

	return (
		<div className={styles.home}>
			<div className={styles.container}>
				<div className={styles.title}>{t('title')}</div>
				<div className={styles.description}>{t('text1')}</div>
				<div className={styles.description}>{t('text2')}</div>
			</div>
			<div className={styles.hint}>{t('press')}</div>
			<Waves className={styles.waves} />
		</div>
	);
};

export default hot(Home);
