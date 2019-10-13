import React, { useEffect, useRef } from 'react';
import { hot } from 'react-hot-loader/root';
import { useTranslation } from 'react-i18next';
import { animated, useSpring, useChain, config } from 'react-spring';

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
			replace(`/curfan_portfolio/${routeLang}/portfolio`);
		}
	}, [keyPress]);

	const titleRef = useRef();
	const titleProps = useSpring({
		ref: titleRef,
		from: { opacity: 0, letterSpacing: 0 },
		to: async next => {
			await next({ opacity: 1, letterSpacing: 0 });
			await next({ opacity: 1, letterSpacing: 10 });
		},
		config: config.molasses,
	});

	const descriptioneRef = useRef();
	const descriptionProps = useSpring({
		ref: descriptioneRef,
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: config.stiff,
	});

	const hintRef = useRef();
	const hintProps = useSpring({
		ref: hintRef,
		from: { opacity: 0 },
		to: { opacity: 0.5 },
		config: config.stiff,
	});

	useChain([titleRef, descriptioneRef, hintRef], [2, 6, 7]);

	return (
		<div className={styles.home}>
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
