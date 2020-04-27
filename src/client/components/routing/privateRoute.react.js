import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, token, ...rest }) => <Route {...rest} render={(props) => (token ? <Component {...props} /> : <Redirect to="/login" />)} />;

PrivateRoute.propTypes = {
    token: PropTypes.string
};

export default inject((stores) => ({
    token: stores.common.token
}))(observer(PrivateRoute));
