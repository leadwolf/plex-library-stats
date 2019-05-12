import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';

import { AppWrapper } from './components/wrappers/AppWrapper/AppWrapper';
import { AppRouter } from './router/AppRouter/AppRouter';
import { history } from './services/history/history';
import { persistor, store } from './services/store/store';

function App() {
    return (
        <CssBaseline>
            <AppWrapper store={store} persistor={persistor} content={<AppRouter history={history} />} />
        </CssBaseline>
    );
}

export { App };
