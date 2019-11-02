import React from 'react';
import classnames from 'classnames';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/css/swiper.css';

import styles from './index.css';

const DefaultSlideComponent = ({ className, image = '' }) => (
	<div className={classnames(styles.defaultSlide, className)}>
		<img src={image} alt="slide" />
	</div>
);

const Slider = ({
	className,
	slideStyle,
	slides = [],
	SlideComponent = DefaultSlideComponent,
	slideProps,
	config = {},
	...props
}) => {
	const swiperConfig = { ...config };
	return (
		<Swiper className={classnames(styles.slider, className)} {...swiperConfig} {...props}>
			{slides.map(slide => (
				<SlideComponent key={slide.id} className={slideStyle} {...slide} {...slideProps} />
			))}
		</Swiper>
	);
};

export default Slider;
