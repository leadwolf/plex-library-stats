import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const AuthenticatedRoute = ({ component: TargetComponent, isAuthenticated, location, ...rest }) => (
    <Route
        {...rest}
        render={() =>
            isAuthenticated ? (
                <TargetComponent {...rest} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location },
                    }}
                />
            )
        }
    />
);

AuthenticatedRoute.defaultProps = {
    isAuthenticated: false,
};

AuthenticatedRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    isAuthenticated: PropTypes.bool,
};

const ConnectedPrivateRoute = connect(
    state => ({ isAuthenticated: state.Authentication.isAuthenticated }),
    {}
)(AuthenticatedRoute);

export { ConnectedPrivateRoute as AuthenticatedRoute };
