import { SET_HEADER } from './xhrTypes';

export const setHeader = (name, value) => ({ type: SET_HEADER, payload: { name, value } });
