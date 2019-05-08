import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { AuthenticationReducer } from '../auth/authReducer';
import { historyReducer } from '../history/history';

const rawAppReducer = combineReducers({
    router: historyReducer,
    Authentication: AuthenticationReducer,
});

const ApplicationReducer = persistReducer(
    {
        key: 'plex-library-stats',
        whitelist: ['Authentication'],
        storage,
    },
    rawAppReducer
);

export { ApplicationReducer, rawAppReducer };
