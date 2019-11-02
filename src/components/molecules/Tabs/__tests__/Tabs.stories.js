import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Tabs from 'components/molecules/Tabs';

const stories = storiesOf('molecules/Tabs', module);

stories.add(
	'__interactive',
	() => (
		<Tabs tabs={['UI / UX', 'Guideline Design', 'Motion']} onTabChange={action('onTabChange')} />
	),
	{ ignoreTest: true },
);
