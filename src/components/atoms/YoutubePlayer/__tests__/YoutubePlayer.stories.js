import React from 'react';
import { storiesOf } from '@storybook/react';

import YoutubePlayer from 'components/atoms/YoutubePlayer';

const stories = storiesOf('atoms/YoutubePlayer', module);

stories.add('__interactive', () => <YoutubePlayer youtubeId="FneT5meY6s4" title="FneT5meY6s4" />);
