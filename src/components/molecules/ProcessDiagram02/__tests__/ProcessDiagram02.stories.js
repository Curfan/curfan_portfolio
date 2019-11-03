import React from 'react';
import { storiesOf } from '@storybook/react';

import ProcessDiagram02 from 'components/molecules/ProcessDiagram02';

const stories = storiesOf('molecules/ProcessDiagram02', module);

stories.add('__interactive', () => (
	<ProcessDiagram02 process={['Synergies', 'Neobards', 'Trend Mirco', 'Dcard', 'T T S']} />
));
