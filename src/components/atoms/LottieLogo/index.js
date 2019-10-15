import React from 'react';
import classnames from 'classnames';
import Lottie from 'react-lottie';

import animationData from 'util/lottie/logo.json';

import styles from './index.css';

const LottieLogo = ({ className, option = {} }) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	return (
		<Lottie
			className={classnames(styles.lottieLogo, className)}
			options={{ ...defaultOptions, ...option }}
			height={400}
			width={400}
		/>
	);
};

export default LottieLogo;
