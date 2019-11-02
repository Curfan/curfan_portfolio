import React from 'react';
import classnames from 'classnames';

import styles from './index.css';

const YoutubePlayer = ({ className, youtubeId, title }) => (
	<div className={classnames(styles.youtubePlayer, className)}>
		<iframe
			title={title}
			src={`https://www.youtube.com/embed/${youtubeId}?modestbranding=1&autoplay=1&controls=0&fs=0&loop=1&rel=0&showinfo=0&disablekb=1&enablejsapi=1&mute=1&playlist=${youtubeId}`}
			frameBorder="0"
		/>
	</div>
);

export default YoutubePlayer;
