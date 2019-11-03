import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import Marker from 'components/atoms/Marker';

const stories = storiesOf('atoms/Marker', module);

stories.add('__interactive', () => <Marker active={boolean('active', true)} />);
