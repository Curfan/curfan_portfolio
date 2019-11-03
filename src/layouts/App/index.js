import React from 'react';

import Waves from 'components/atoms/Waves';

import styles from './index.css';

const App = ({ children }) => (
	<div className={styles.app}>
		{children}
		<Waves className={styles.waves} />
	</div>
);

export default App;
