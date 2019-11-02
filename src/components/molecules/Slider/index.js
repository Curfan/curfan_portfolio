import React, { useEffect, useState, useImperativeHandle } from 'react';
import classnames from 'classnames';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/css/swiper.css';

import styles from './index.css';

const DefaultSlideComponent = ({ className, image = '' }) => (
	<div className={classnames(styles.defaultSlide, className)}>
		<img src={image} alt="slide" />
	</div>
);

const Slider = React.forwardRef(
	(
		{
			className,
			slideStyle,
			slides = [],
			SlideComponent = DefaultSlideComponent,
			slideProps,
			config = {},
		},
		ref,
	) => {
		const [swiper, updateSwiper] = useState(null);
		const swiperConfig = { ...config };

		useEffect(() => {
			if (swiper) {
				swiper.slideTo(0);
				swiper.update();
			}
		}, [slides]);

		useImperativeHandle(ref, () => ({
			slideTo: props => {
				swiper.slideTo(props);
			},
		}));

		return (
			<div className={classnames(styles.slider, className)}>
				<Swiper getSwiper={updateSwiper} {...swiperConfig}>
					{slides.map(slide => (
						<SlideComponent key={slide.id} className={slideStyle} {...slide} {...slideProps} />
					))}
				</Swiper>
			</div>
		);
	},
);

// const Slider = ({
// 	className,
// 	slideStyle,
// 	slides = [],
// 	SlideComponent = DefaultSlideComponent,
// 	slideProps,
// 	config = {},
// }) => {
// 	const [swiper, updateSwiper] = useState(null);
// 	const swiperConfig = { ...config };

// 	useEffect(() => {
// 		if (swiper) {
// 			swiper.slideTo(0);
// 			swiper.update();
// 		}
// 	}, [slides]);

// 	return (
// 		<div className={classnames(styles.slider, className)}>
// 			<Swiper getSwiper={updateSwiper} {...swiperConfig}>
// 				{slides.map(slide => (
// 					<SlideComponent key={slide.id} className={slideStyle} {...slide} {...slideProps} />
// 				))}
// 			</Swiper>
// 		</div>
// 	);
// };

export default Slider;
