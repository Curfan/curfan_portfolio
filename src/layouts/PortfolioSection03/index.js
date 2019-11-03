import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';

import { useBoolean } from 'util/hook';

import PageSection from 'components/atoms/PageSection';
import Title from 'components/atoms/Title';
import ProcessDiagram from 'components/molecules/ProcessDiagram';

import styles from './index.css';

const data = [
	{
		title: 'step1',
		description: 'step1_description',
		image: 'https://fakeimg.pl/1200x700/?text=Define',
	},
	{
		title: 'step2',
		description: 'step2_description',
		image: 'https://fakeimg.pl/1200x700/?text=Design',
	},
	{
		title: 'step3',
		description: 'step3_description',
		image: 'https://fakeimg.pl/1200x700/?text=Delivery',
	},
	{
		title: 'step4',
		description: 'step4_description',
		image: 'https://fakeimg.pl/1200x700/?text=Validate',
	},
];

const PortfolioSection03 = ({ className }) => {
	const { t } = useTranslation('portfolioSection03');
	const [state, setState] = useState(0);

	const [changeCompleted, { setTrue, setFalse }] = useBoolean();

	useEffect(() => {
		setTimeout(() => {
			setTrue();
		}, 300);
	}, [state]);

	return (
		<PageSection className={classnames(styles.portfolioSection03, className)}>
			<div className={styles.process}>
				<Title className={styles.title} subtitle>
					{t('processTitle')}
				</Title>
				<ProcessDiagram
					process={data.map(({ title }) => t(title))}
					onProcessChange={stepIndex => {
						setFalse();
						setTimeout(() => {
							setState(stepIndex);
						}, 300);
					}}
				/>
			</div>
			<div className={classnames(styles.content, { [styles.show]: changeCompleted })}>
				<Title className={styles.title}>{t(data[state].title)}</Title>
				<div className={styles.description}>{t(data[state].description)}</div>
				<img src={data[state].image} alt="" />
			</div>
		</PageSection>
	);
};

export default PortfolioSection03;
