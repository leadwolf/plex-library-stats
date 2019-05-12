import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';

import { LoginForm } from './LoginForm';

const StatefulLoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <LoginForm
            username={username}
            password={password}
            handleUsernameChange={e => setUsername(e.target.value)}
            handlePasswordChange={e => setPassword(e.target.value)}
            onSubmit={action('onSubmit')}
        />
    );
};

storiesOf('LoginForm', module)
    .add('default', () => <LoginForm />)
    .add('stateful', () => <StatefulLoginForm />);
