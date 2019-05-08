import PropTypes from 'prop-types';
import React from 'react';

const LoginForm = ({ username, password, onSubmit }) => {
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();

                    onSubmit();
                }}
            >
                <input type="text" name="username" value={username || ''} />
                <input type="text" name="username" value={password || ''} />
                <button type="submit" onClick={onSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
};

LoginForm.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    onSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
    username: '',
    password: '',
    onSubmit: () => undefined,
};

export { LoginForm };
