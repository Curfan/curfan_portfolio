import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import Card01 from 'components/molecules/Card01';

const stories = storiesOf('molecules/Card01', module);

stories.add('__interactive', () => (
	<div style={{ maxWidth: '240px' }}>
		<Card01
			photo={text('photo', 'https://fakeimg.pl/300/')}
			title={text('title', 'Product Name')}
			description={text('description', 'Task')}
		/>
	</div>
));
