import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import { AuthenticationMiddleware } from '../auth/authMiddleware';
import { historyMiddleware } from '../history/history';
import { logger } from '../logger/logger';
import { XHRMiddleware } from '../xhr/xhrMiddleware';
import { ApplicationReducer } from './applicationReducer';
import { initialState } from './initialState';

const composeEnhancers = composeWithDevTools({
    name: 'midaslink-backoffice',
});

const reduxLogger = createLogger({
    predicate: (getState, action) => !action.type.startsWith('@@router'),
    logger,
});

const middlewares = [thunk, historyMiddleware, AuthenticationMiddleware, XHRMiddleware, reduxLogger];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(ApplicationReducer, initialState, enhancer);

const persistor = persistStore(store);

export { store, persistor };
