import * as AuthTypes from './authTypes';

const initialState = {
    access_token: '',

    isAuthenticated: false,
    initialized: true,

    user: {},
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
