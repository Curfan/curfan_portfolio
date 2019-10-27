import { useState, useEffect } from 'react';
import moment from 'moment';

export const useNewTimer = () => {
	const [date, setDate] = useState(moment().format('HH:mm'));

	useEffect(() => {
		const timerID = setInterval(() => setDate(moment().format('HH:mm')), 1000);

		return () => {
			clearInterval(timerID);
		};
	});

	return date;
};
