import React from 'react';
import { storiesOf } from '@storybook/react';

import PageSection from 'components/atoms/PageSection';

const stories = storiesOf('atoms/PageSection', module);

stories.add('__interactive', () => <PageSection />);
