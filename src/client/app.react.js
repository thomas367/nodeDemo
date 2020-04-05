import React from 'react';
import Navbar from 'client/components/layout/navbar/navbar.react';
import Landing from 'client/components/layout/landing/landing.react';
import Login from 'client/components/auth/login/login.react';
import Register from 'client/components/auth/register/register.react';
import Dashboard from 'client/components/dashboard/dashboard.react';
import PrivateRoute from 'client/components/routing/privateRoute.react';
import { Route, Switch } from 'react-router-dom';
import styles from 'client/app.scss';

function App() {
    return (
        <>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <section className={styles.container}>
                <Switch>
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                </Switch>
            </section>
        </>
    );
}

export default App;
