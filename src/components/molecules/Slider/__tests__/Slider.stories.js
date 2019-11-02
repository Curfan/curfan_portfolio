import React from 'react';
import { storiesOf } from '@storybook/react';

import Slider from 'components/molecules/Slider';

const stories = storiesOf('molecules/Slider', module);

stories.add('__interactive', () => (
	<Slider
		slides={[
			{ id: 1, title: 'UI/UX 1', description: 'Task', image: 'https://fakeimg.pl/300/?text=01' },
			{ id: 2, title: 'UI/UX 2', description: 'Task', image: 'https://fakeimg.pl/300/?text=02' },
			{ id: 3, title: 'UI/UX 3', description: 'Task', image: 'https://fakeimg.pl/300/?text=03' },
			{ id: 4, title: 'UI/UX 4', description: 'Task', image: 'https://fakeimg.pl/300/?text=04' },
			{ id: 5, title: 'UI/UX 5', description: 'Task', image: 'https://fakeimg.pl/300/?text=05' },
		]}
		config={{ spaceBetween: 20, slidesPerView: 4 }}
	/>
));
