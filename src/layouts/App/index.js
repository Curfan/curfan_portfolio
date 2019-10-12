import React from 'react';

import Header from 'components/organisms/Header';

const App = ({ children }) => (
	<div>
		<Header />
		{children}
	</div>
);

export default App;
