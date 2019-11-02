import React from 'react';
import { storiesOf } from '@storybook/react';

import SocialLink from 'components/atoms/SocialLink';

import FacebookIcon from 'images/icon/social-facebook.inline.svg';

const stories = storiesOf('atoms/SocialLink', module);

stories.add('__interactive', () => (
	<SocialLink Icon={FacebookIcon} link="https://www.facebook.com/" />
));
