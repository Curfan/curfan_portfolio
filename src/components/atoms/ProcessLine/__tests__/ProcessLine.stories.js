import React from 'react';
import { storiesOf } from '@storybook/react';

import ProcessLine from 'components/atoms/ProcessLine';

const stories = storiesOf('atoms/ProcessLine', module);

stories.add('__interactive', () => <ProcessLine />);
