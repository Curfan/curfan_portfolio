import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

import { useReactRouter } from 'models/route';
import { useLanguage } from 'models/i18n';

import { mapLanguageName, MAPPING_SWITCH_LANGUAGE } from 'util/i18n';

import IconSuitcase from 'images/icon/suitcase.inline.svg';
import IconMember from 'images/icon/member.inline.svg';
import IconPower from 'images/icon/power.inline.svg';

import styles from './index.css';

const Navigation = () => {
	const [{ pathnameWithoutLang }] = useReactRouter();
	const [{ lang, routeLang }, { changeRouteByLanguage }] = useLanguage();

	return (
		<nav className={styles.navigation}>
			<ul>
				<li>
					<Link
						className={classnames(styles.item, {
							[styles.active]: pathnameWithoutLang === 'portfolio',
						})}
						to={`/${routeLang}/portfolio`}
					>
						<div className={styles.icon}>
							<IconSuitcase />
						</div>
						<span className={styles.label}>Portfolio</span>
					</Link>
				</li>
				<li>
					<Link
						className={classnames(styles.item, {
							[styles.active]: pathnameWithoutLang === 'about',
						})}
						to={`/${routeLang}/about`}
					>
						<div className={styles.icon}>
							<IconMember />
						</div>
						<span className={styles.label}>About</span>
					</Link>
				</li>
				<li>
					<Link
						className={styles.item}
						onClick={() => changeRouteByLanguage(MAPPING_SWITCH_LANGUAGE[lang])}
					>
						<div className={styles.icon}>
							<span className={styles.text}>{mapLanguageName(MAPPING_SWITCH_LANGUAGE[lang])}</span>
						</div>
					</Link>
				</li>
				<li>
					<Link className={classnames(styles.item)} to={`/${routeLang}/`}>
						<div className={styles.icon}>
							<IconPower />
						</div>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
