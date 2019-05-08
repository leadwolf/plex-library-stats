import { PropTypes } from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { triggerAppLoad } from '../../../services/app/appActions';

class AppLoad extends React.Component {
    componentDidMount() {
        this.props.triggerAppLoad(false);
    }

    render() {
        return this.props.children;
    }
}

AppLoad.propTypes = { triggerAppLoad: PropTypes.func.isRequired };

const ConnectedAppLoad = connect(
    () => ({}),
    {
        triggerAppLoad,
    }
)(AppLoad);

export { ConnectedAppLoad as AppLoad };
