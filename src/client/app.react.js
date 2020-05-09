import React from 'react';
import Navbar from 'client/components/layout/navbar/navbar.react';
import Landing from 'client/components/layout/landing/landing.react';
import Login from 'client/components/auth/login/login.react';
import Register from 'client/components/auth/register/register.react';
import Dashboard from 'client/components/dashboard/dashboard.react';
import CreateProfile from 'client/components/profile/createProfile/createProfile.react';
import PrivateRoute from 'client/components/routing/privateRoute.react';
import { Route, Switch } from 'react-router-dom';
import 'client/app.scss';

function App() {
    return (
        <>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Switch>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/createProfile" component={CreateProfile} />
            </Switch>
        </>
    );
}

export default App;
