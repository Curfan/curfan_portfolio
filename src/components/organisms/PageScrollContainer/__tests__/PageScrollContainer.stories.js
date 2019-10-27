import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PageScrollContainer from 'components/organisms/PageScrollContainer';

const stories = storiesOf('organisms/PageScrollContainer', module);

stories.add(
	'__interactive',
	() => (
		<PageScrollContainer onPageChange={action('onPageChange')} anchors={['01', '02', '03', '04']}>
			<section style={{ background: 'darkseagreen' }}>test 1</section>
			<section style={{ background: 'blanchedalmond' }}>test 2</section>
			<section style={{ background: 'lightsalmon' }}>test 3</section>
			<section style={{ background: 'lightskyblue' }}>test 4</section>
		</PageScrollContainer>
	),
	{
		ignoreTest: true,
		redux: {
			data: {
				routing: {
					locationBeforeTransitions: { pathname: '', hash: '' },
				},
			},
		},
	},
);
