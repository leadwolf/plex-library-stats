import './loginForm.scss';

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
            <input type="text" name="username" value={username || ''} onChange={handleUsernameChange} />
            <input type="password" name="username" value={password || ''} onChange={handlePasswordChange} />
            <button type="submit" onClick={onSubmit}>
                Submit
            </button>
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
