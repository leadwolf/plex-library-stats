import 'react-toastify/dist/ReactToastify.css';

import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import { Loading } from '../../../scenes/Loading/Loading';
import { AppLoad } from '../AppLoad/AppLoad';
import { AuthGate } from '../AuthGate/AuthGate';

const AppWrapper = ({ content, store, persistor }) => (
    <PersistGate loading={<Loading />} persistor={persistor}>
        <Provider store={store}>
            <AppLoad>
                <AuthGate>
                    <div style={{ height: '100%' }}>
                        {content}
                        <ToastContainer autoClose={8000} position={toast.POSITION.BOTTOM_RIGHT} />
                    </div>
                </AuthGate>
            </AppLoad>
        </Provider>
    </PersistGate>
);

AppWrapper.propTypes = {
    store: PropTypes.any.isRequired,
    persistor: PropTypes.any.isRequired,
    content: PropTypes.node.isRequired,
};

export { AppWrapper };
