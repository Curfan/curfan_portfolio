import React from 'react';
import { storiesOf } from '@storybook/react';

import LottieLogo from 'components/atoms/LottieLogo';

const stories = storiesOf('atoms/LottieLogo', module);

stories.add('__interactive', () => <LottieLogo />);
