import { LOGIN_SUCCESS, LOGOUT } from '../auth/authTypes';
import { setHeader } from './xhrOperations';
import { APP_LOAD } from '../app/appTypes';

const PLEX_TOKEN_HEADER = 'X-Plex-Token';

export const XHRMiddleware = ({ dispatch, getState }) => next => action => {
    if (action && action.type === LOGIN_SUCCESS) {
        const {
            payload: { authentication_token },
        } = action;

        dispatch(setHeader(PLEX_TOKEN_HEADER, authentication_token));
    }

    if (action && action.type === APP_LOAD) {
        const { authentication_token } = getState().Authentication;

        dispatch(setHeader(PLEX_TOKEN_HEADER, authentication_token));
    }

    if (action && action.type === LOGOUT) {
        dispatch(setHeader(PLEX_TOKEN_HEADER, ''));
    }

    return next(action);
};
