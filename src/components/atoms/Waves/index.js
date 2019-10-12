/* eslint-disable no-mixed-operators */
import React, { useRef, useEffect } from 'react';
import classnames from 'classnames';

import ClassicalNoise from './ClassicalNoise';

import styles from './index.css';

const Waves = ({ className }) => {
	const canvasRef = useRef();

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		const perlin = new ClassicalNoise();

		const variation = 0.003;
		const amp = 200;
		const variators = [];
		const maxLines = navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ? 25 : 30;
		let canvasWidth;
		let canvasHeight;
		let startY;

		for (let i = 0, u = 0; i < maxLines; i += 1, u += 0.02) {
			variators[i] = u;
		}

		function draw() {
			ctx.shadowColor = 'rgba(43, 205, 255, 1)';
			ctx.shadowBlur = 0;

			for (let i = 0; i <= maxLines; i += 1) {
				ctx.beginPath();
				ctx.moveTo(0, startY);
				let y;
				for (let x = 0; x <= canvasWidth; x += 1) {
					y = perlin.noise(x * variation + variators[i], x * variation, 0);
					ctx.lineTo(x, startY + amp * y);
				}
				const alpha = Math.min(Math.abs(y), 0.8) + 0.1;
				ctx.strokeStyle = `rgba(80,210,240,${alpha})`;
				ctx.stroke();
				ctx.closePath();

				variators[i] += 0.005;
			}
		}

		function animate() {
			ctx.clearRect(0, 0, canvasWidth, canvasHeight);
			draw();
			requestAnimationFrame(animate);
		}

		function resizeCanvas() {
			const { clientWidth, clientHeight } = document.documentElement;
			canvasWidth = clientWidth;
			canvasHeight = clientHeight;

			canvas.setAttribute('width', canvasWidth);
			canvas.setAttribute('height', canvasHeight);

			startY = canvasHeight / 2;
		}

		(function init() {
			resizeCanvas();
			animate();
			window.addEventListener('resize', resizeCanvas);
		})();
	});

	return <canvas ref={canvasRef} className={classnames(styles.waves, className)} />;
};

export default Waves;
