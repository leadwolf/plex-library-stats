import './loginForm.scss';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from 'react';

const LoginForm = ({ username, password, handleUsernameChange, handlePasswordChange, onSubmit }) => {
    return (
        <form
            onSubmit={e => {
                e.preventDefault();

                onSubmit();
            }}
            className="login-form"
        >
            <TextField
                type="text"
                name="username"
                value={username || ''}
                onChange={handleUsernameChange}
                label="Username"
            />
            <TextField
                type="password"
                name="username"
                value={password || ''}
                onChange={handlePasswordChange}
                label="Password"
            />
            <Button type="submit" onClick={onSubmit} color="primary">
                Submit
            </Button>
        </form>
    );
};

LoginForm.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    handleUsernameChange: PropTypes.func,
    handlePasswordChange: PropTypes.func,
    onSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
    username: '',
    password: '',
    handleUsernameChange: () => undefined,
    handlePasswordChange: () => undefined,
    onSubmit: () => undefined,
};

export { LoginForm };
