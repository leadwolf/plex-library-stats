import { fromUnixTime } from 'date-fns/esm';

import * as AuthTypes from './authTypes';

const initialState = {
    isAuthenticated: false,
    initialized: true,

    authToken: '',
    authentication_token: '',
    confirmedAt: fromUnixTime(0), // account confirmation
    email: '',
    entitlements: [],
    forumId: null,
    hasPassword: false,
    id: -1,
    joined_at: fromUnixTime(0),
    rememberMe: false,
    roles: {},
    subscription: {},
    thumb: '', // url
    title: '',
    username: '',
    uuid: '',
};

const AuthenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case AuthTypes.LOGIN_FAILURE:
            return { ...initialState, initialized: true };
        case AuthTypes.LOGIN_SUCCESS:
            return { ...state, initialized: true, isAuthenticated: true, ...action.payload };
        case AuthTypes.SET_INITIALIZED:
            return { ...state, initialized: action.payload.initialized };
        case AuthTypes.SET_IS_AUTH:
            return { ...state, isAuthenticated: action.payload.isAuthenticated };
        case AuthTypes.LOGOUT:
            return { ...initialState, initialized: true };
    }
};

export { AuthenticationReducer };
