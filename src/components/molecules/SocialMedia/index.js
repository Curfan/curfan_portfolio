import React from 'react';
import classnames from 'classnames';

import SocialLink from 'components/atoms/SocialLink';

import FacebookIcon from 'images/icon/social-facebook.inline.svg';
import YoutubeIcon from 'images/icon/social-youtube.inline.svg';
import LinkedinIcon from 'images/icon/social-linkedin.inline.svg';

import styles from './index.css';

const SocialMedia = ({ className }) => (
	<div className={classnames(styles.socialMedia, className)}>
		<SocialLink className={styles.link} Icon={FacebookIcon} link="https://www.facebook.com/" />
		<SocialLink className={styles.link} Icon={YoutubeIcon} link="https://www.youtube.com/" />
		<SocialLink className={styles.link} Icon={LinkedinIcon} link="https://www.linkedin.com/" />
	</div>
);

export default SocialMedia;
