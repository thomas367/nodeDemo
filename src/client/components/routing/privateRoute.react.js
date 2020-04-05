import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

const PrivateRoute = ({ component: Component, token, ...rest }) => {
    console.log(token);
    return <Route {...rest} render={props => (token ? <Component {...props} /> : <Redirect to="/login" />)} />;
};

PrivateRoute.propTypes = {
    token: PropTypes.string
};

export default inject(stores => ({
    token: stores.common.token
}))(observer(PrivateRoute));
