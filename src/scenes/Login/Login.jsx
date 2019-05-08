import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';

import { LoginForm } from '../../components/LoginForm/LoginForm';
import { login as operationLogin } from '../../services/auth/authOperations';

const Login = ({ login }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <LoginForm
                username={username}
                password={password}
                handleUsernameChange={e => setUsername(e.target.value)}
                handlePasswordChange={e => setPassword(e.target.value)}
                onSubmit={() => login(username, password)}
            />
        </div>
    );
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
};

const EnhancedLogin = connect(
    () => ({}),
    { login: operationLogin }
)(Login);

export { EnhancedLogin as Login, Login as BareLogin };
