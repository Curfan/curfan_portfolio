import React from 'react';
import { storiesOf } from '@storybook/react';

import Waves from 'components/atoms/Waves';

const stories = storiesOf('atoms/Waves', module);

stories.add('__interactive', () => <Waves />, { ignoreTest: true });
