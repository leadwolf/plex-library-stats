import { push } from 'connected-react-router';
import { LOGOUT } from './authTypes';

const AuthenticationMiddleware = ({ dispatch, getState }) => next => action => {
    if (action && action.type === LOGOUT) {
        dispatch(push('/login'));
    }

    return next(action);
};

export { AuthenticationMiddleware };
