import { signIn } from '../plexapi/plexapi';
import { loginFailure, loginSuccess } from './authActions';

export const login = (username, password) => dispatch =>
    signIn(username, password)
        .then(res => {
            return dispatch(loginSuccess(res.data));
        })
        .catch(err => dispatch(loginFailure(err)));
