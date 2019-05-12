import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Home } from '../../scenes/Home/Home';
import { Login } from '../../scenes/Login/Login';
import { AuthenticatedRoute } from '../AuthenticatedRoute/AuthenticatedRoute';

const AppRouter = ({ history }) => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <AuthenticatedRoute component={Home} />

                <Route path="/login" component={Login} />

                <Redirect to="/login" />
            </Switch>
        </ConnectedRouter>
    );
};

AppRouter.propTypes = {};

export { AppRouter };
