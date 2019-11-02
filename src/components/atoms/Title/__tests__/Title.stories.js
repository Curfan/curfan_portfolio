import React from 'react';
import { storiesOf } from '@storybook/react';

import Title from 'components/atoms/Title';

const stories = storiesOf('atoms/Title', module);

stories.add('__interactive', () => <Title>Title</Title>);

stories.add('subtitle', () => <Title subtitle>Title</Title>);

stories.add('with tail', () => (
	<Title subtitle withTail>
		Title
	</Title>
));
