import { useState, useEffect, useRef } from 'react';

export const useMedia = () => {
	const phoneMedia = window.matchMedia('(max-width: 375px)');
	const smallTabletMedia = window.matchMedia('(max-width: 767px) and (min-width: 376px)');
	const tabletMedia = window.matchMedia('(max-width: 1199px) and (min-width: 768px)');
	const desktopMedia = window.matchMedia('(min-width: 1200px)');

	let defaultMedia = 'desktop';

	if (phoneMedia.matches) {
		defaultMedia = 'phone';
	}

	if (smallTabletMedia.matches) {
		defaultMedia = 'smallTablet';
	}

	if (tabletMedia.matches) {
		defaultMedia = 'tablet';
	}

	const [media, setMedia] = useState(defaultMedia);

	const handleMediaChange = mediaName => mediaHandler => {
		if (mediaHandler.matches && mediaName !== media) {
			setMedia(mediaName);
		}
	};

	useEffect(() => {
		const phoneHandler = handleMediaChange('phone');
		const smallTabletHandler = handleMediaChange('smallTablet');
		const tabletHandler = handleMediaChange('tablet');
		const desktopHandler = handleMediaChange('desktop');

		phoneMedia.addListener(phoneHandler);
		smallTabletMedia.addListener(smallTabletHandler);
		tabletMedia.addListener(tabletHandler);
		desktopMedia.addListener(desktopHandler);

		return () => {
			phoneMedia.removeListener(phoneHandler);
			smallTabletMedia.removeListener(smallTabletHandler);
			tabletMedia.removeListener(tabletHandler);
			desktopMedia.removeListener(desktopHandler);
		};
	}, [media]);

	return media;
};

// Handle the Dom event
export const useDom = eventHandler => {
	// Only subscribe/unsubscribe on mount/unmount lifecycle
	useEffect(() => {
		Object.keys(eventHandler).forEach(event => window.addEventListener(event, eventHandler[event]));

		return () => {
			Object.keys(eventHandler).forEach(event =>
				window.removeEventListener(event, eventHandler[event]),
			);
		};
	}, []);
};

export const useElement = (
	{
		defaultHeight,
		defaultWidth,
		onUpdateOffsetTop = () => {},
		onUpdateHeight = () => {},
		onUpdateWidth = () => {},
	},
	triggerEffect = [],
) => {
	const [{ height, width, offsetTop }, setState] = useState({
		height: defaultHeight,
		width: defaultWidth,
		offsetTop: null,
	});
	const refChild = useRef(null);

	const handleOffsetTop = () => {
		const node = refChild.current;
		const bodyRect = document.body.getBoundingClientRect();
		const elemRect = node.getBoundingClientRect();
		const newOffsetTop = elemRect.top - bodyRect.top;

		if (offsetTop !== newOffsetTop) {
			setState(prevState => ({ ...prevState, offsetTop: newOffsetTop }));

			onUpdateOffsetTop(newOffsetTop);
		}
	};

	const handleHeight = () => {
		const node = refChild.current;

		if (height !== node.offsetHeight && node.offsetHeight > 0) {
			// Update the component height
			setState(prevState => ({ ...prevState, height: node.offsetHeight }));

			onUpdateHeight(node.offsetHeight);
		}
	};

	const handleWidth = () => {
		const node = refChild.current;

		if (width !== node.offsetWidth && node.offsetWidth > 0) {
			// Update the component width
			setState(prevState => ({ ...prevState, width: node.offsetWidth }));

			onUpdateWidth(node.offsetWidth);
		}
	};

	const handleDomEvent = () => {
		if (refChild.current !== null && refChild.current.node !== null) {
			handleHeight();
			handleWidth();
			handleOffsetTop();
		}
	};

	const handleScroll = () => {
		window.requestAnimationFrame(handleDomEvent);
	};

	const handleResize = () => {
		window.requestAnimationFrame(handleDomEvent);
	};

	useDom({ scroll: handleScroll, resize: handleResize });

	useEffect(() => {
		let didUnsubscribe = false;

		const updateDomHandle = () => {
			if (didUnsubscribe) {
				return;
			}
			handleDomEvent();
		};

		// Setup initial value
		updateDomHandle();

		return () => {
			didUnsubscribe = true;
		};
	}, [refChild, ...triggerEffect]);

	return { refChild, height, width, offsetTop };
};

export const useScroll = () => {
	const [scrollY, setState] = useState(window.scrollY);

	let ticking = false;

	const handleScroll = () => {
		if (!ticking) {
			window.requestAnimationFrame(() => {
				setState(window.scrollY);
				ticking = false;
			});
		}
		ticking = true;
	};

	useDom({ scroll: handleScroll });

	return scrollY;
};

export const useResize = () => {
	const { clientWidth, clientHeight } = document.documentElement;

	const [size, setState] = useState({ width: clientWidth, height: clientHeight });
	const preventTrigger = useRef(false);

	const resizeEvent = () => {
		if (!preventTrigger.current) {
			window.requestAnimationFrame(() => {
				setState({
					width: document.documentElement.clientWidth,
					height: document.documentElement.clientHeight,
				});
				preventTrigger.current = false;
			});
		}
		preventTrigger.current = true;
	};

	useDom({ resize: resizeEvent });

	return size;
};

export const useKeyPress = () => {
	const [keyPressed, setKeyPressed] = useState(false);

	const handleKeydown = ({ key }) => {
		setKeyPressed(key);
	};

	const handleKeyup = () => {
		setKeyPressed(false);
	};

	useDom({ keydown: handleKeydown, keyup: handleKeyup });

	return keyPressed;
};

export const useMouseClick = () => {
	const [mouseClicked, setMouseClicked] = useState(false);

	const handleMousedown = () => {
		setMouseClicked(true);
	};

	const handleMouseup = () => {
		setMouseClicked(false);
	};

	useDom({ mousedown: handleMousedown, mouseup: handleMouseup });

	return mouseClicked;
};
