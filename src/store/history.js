import { useRouterHistory } from 'react-router';
import { createHistory } from 'history';

export const browserHistory = useRouterHistory(createHistory)({
	basename: process.env.DEV ? '' : '/curfan_portfolio',
});
