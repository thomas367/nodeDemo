import React from 'react';
import Navbar from 'client/components/layout/navbar/navbar.react';
import Landing from 'client/components/layout/landing/landing.react';
import Login from 'client/components/auth/login/login.react';
import Register from 'client/components/auth/register/register.react';
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
                </Switch>
            </section>
        </>
    );
}

export default App;
