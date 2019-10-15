import React, { useEffect, useRef } from 'react';
import { hot } from 'react-hot-loader/root';
import { useTranslation } from 'react-i18next';
import { animated, useSpring, useChain, config } from 'react-spring';

import { useReactRouter } from 'models/route';
import { useLanguage } from 'models/i18n';
import { useKeyPress } from 'util/event';

import LottieLogo from 'components/atoms/LottieLogo';
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

	const logoRef = useRef();
	const logoProps = useSpring({
		ref: logoRef,
		from: { opacity: 0 },
		to: [{ opacity: 1 }, { opacity: 0 }],
		config: { ...config.molasses, duration: 1900 },
	});

	const titleRef = useRef();
	const titleProps = useSpring({
		ref: titleRef,
		from: { opacity: 0, letterSpacing: 0 },
		to: [{ opacity: 1, letterSpacing: 0 }, { opacity: 1, letterSpacing: 10 }],
		config: { ...config.molasses, duration: 1200 },
	});

	const descriptioneRef = useRef();
	const descriptionProps = useSpring({
		ref: descriptioneRef,
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: { ...config.molasses, duration: 1200 },
	});

	const hintRef = useRef();
	const hintProps = useSpring({
		ref: hintRef,
		from: { opacity: 0 },
		to: { opacity: 0.5 },
		config: { ...config.molasses, duration: 1200 },
	});

	useChain([logoRef, titleRef, descriptioneRef, hintRef], [0, 5, 8, 9]);

	return (
		<div className={styles.home}>
			<animated.div className={styles.logo} style={logoProps}>
				<LottieLogo />
			</animated.div>
			<div className={styles.container}>
				<animated.div className={styles.title} style={titleProps}>
					{t('title')}
				</animated.div>
				<animated.div className={styles.description} style={descriptionProps}>
					{t('text1')}
				</animated.div>
				<animated.div className={styles.description} style={descriptionProps}>
					{t('text2')}
				</animated.div>
			</div>
			<animated.div className={styles.hint} style={hintProps}>
				{t('press')}
			</animated.div>
			<Waves className={styles.waves} />
		</div>
	);
};

export default hot(Home);
