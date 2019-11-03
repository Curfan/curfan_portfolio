import React from 'react';
import { storiesOf } from '@storybook/react';

import ProcessDiagram from 'components/molecules/ProcessDiagram';

const stories = storiesOf('molecules/ProcessDiagram', module);

stories.add('__interactive', () => (
	<ProcessDiagram process={['Define', 'Design', 'Delivery', 'Validate']} />
));
