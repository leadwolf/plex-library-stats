import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory({});

/**
 * This MUST be called 'router' in the reducer
 */
export const historyReducer = connectRouter(history);

export const historyMiddleware = routerMiddleware(history);
