import { signIn } from '../plexapi/plexapi';
import { loginFailure, loginSuccess } from './authActions';
import { logger } from '../logger/logger';

export const login = (username, password) => dispatch =>
    signIn(username, password)
        .then(res => {
            return dispatch(loginSuccess(res.data));
        })
        .catch(err => {
            logger.error('Error signing in ', err);
            dispatch(loginFailure(err));
        });
