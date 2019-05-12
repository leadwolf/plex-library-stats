import { XHR } from './xhr';
import * as XHRActions from './xhrActions';

export const setHeader = (name, value) => dispatch => {
    dispatch(XHRActions.setHeader(name, value));

    XHR.defaults.headers.common[name] = value;
};
