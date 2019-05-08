import * as types from './authTypes';

export const loginFailure = error => ({ type: types.LOGIN_FAILURE, payload: { error } });

export const loginSuccess = result => ({ type: types.LOGIN_SUCCESS, payload: { ...result } });

export const logout = () => ({ type: types.LOGOUT });

export const setInitialized = initialized => ({ type: types.SET_INITIALIZED, payload: { initialized } });

export const setIsAuthenticated = isAuthenticated => ({ type: types.SET_IS_AUTH, payload: { isAuthenticated } });
