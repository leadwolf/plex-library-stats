import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';

import { Login } from './scenes/Login/Login';
import { AppWrapper } from './components/wrappers/AppWrapper/AppWrapper';
import { store, persistor } from './services/store/store';

function App() {
    return (
        <CssBaseline>
            <AppWrapper
                store={store}
                persistor={persistor}
                content={
                    <>
                        <div>TODO: router</div>
                        <Login />
                    </>
                }
            />
        </CssBaseline>
    );
}

export { App };
