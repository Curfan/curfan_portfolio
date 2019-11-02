import React from 'react';
import { storiesOf } from '@storybook/react';

import SocialMedia from 'components/molecules/SocialMedia';

const stories = storiesOf('molecules/SocialMedia', module);

stories.add('__interactive', () => <SocialMedia />);
