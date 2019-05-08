import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { Loading } from '../../../scenes/Loading/Loading';


class AuthGate extends React.Component {
    state = {
        passedMinDelay: false,
    };

    componentDidMount() {
        this.triggerMinDelay();
    }

    static getDerivedStateFromProps(nextProps) {
        const { initialized } = nextProps;

        if (!initialized) return { passedMinDelay: false };

        return null;
    }

    componentDidUpdate() {
        const { initialized } = this.props;

        if (!initialized) {
            this.triggerMinDelay();
        }
    }

    triggerMinDelay = () => {
        const { minDelay } = this.props;

        this.minDelayTimeout = setTimeout(() => {
            this.setState({ passedMinDelay: true });
        }, minDelay);
    };

    render() {
        const { initialized, authenticated, children } = this.props;
        const { passedMinDelay } = this.state;

        if ((authenticated && !initialized) || !passedMinDelay) {
            return <Loading />;
        }

        return children;
    }
}

AuthGate.defaultProps = {
    initialized: false,
    authenticated: false,
    children: null,
    minDelay: 1000,
};

AuthGate.propTypes = {
    initialized: PropTypes.bool,
    authenticated: PropTypes.bool,
    children: PropTypes.node,
    minDelay: PropTypes.number,
};

const bindActions = dispatch => ({});

const mapStateToProps = state => ({
    initialized: state.Authentication.initialized,
    authenticated: !state.Authentication.isAuthenticated,
});

const ConnectedAuthGate = connect(
    mapStateToProps,
    bindActions
)(AuthGate);
export { ConnectedAuthGate as AuthGate };
