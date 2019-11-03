import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object } from '@storybook/addon-knobs/react';

import Card02 from 'components/molecules/Card02';

const stories = storiesOf('molecules/Card02', module);

stories.add('__interactive', () => (
	<Card02
		photo={text('photo', 'https://fakeimg.pl/300/?text=PHOTO')}
		name={text('name', 'Name')}
		title={text('title', 'title')}
		time={text('time', 'time')}
		notes={object('notes', ['notes...', 'notes...', 'notes...'])}
	/>
));
