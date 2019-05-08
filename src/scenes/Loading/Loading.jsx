import PropTypes from 'prop-types';
import React from 'react';

const Loading = ({ pastDelay }) => {
    if (!pastDelay) return null;

    return <div>todo: LOADING</div>;
};

Loading.propTypes = {
    pastDelay: PropTypes.bool,
};

Loading.defaultProps = {
    pastDelay: true,
};

export { Loading };
