import React from 'react';
import Navbar from 'client/components/layout/navbar/navbar.react';
import Landing from 'client/components/layout/landing/landing.react';
import Login from 'client/components/auth/login/login.react';
import Register from 'client/components/auth/register/register.react';
import Dashboard from 'client/components/dashboard/dashboard.react';
import CreateProfile from 'client/components/profile/createOrUpdateProfile/createProfile.react';
import EditProfile from 'client/components/profile/createOrUpdateProfile/editProfile.react';
import AddExperienceProfile from 'client/components/profile/addExperienceProfile/AddExperienceProfile.react';
import AddEducationProfile from 'client/components/profile/addEducationProfile/AddEducationProfile.react';
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
                <PrivateRoute exact path="/editProfile" component={EditProfile} />
                <PrivateRoute exact path="/addExperience" component={AddExperienceProfile} />
                <PrivateRoute exact path="/addEducation" component={AddEducationProfile} />
            </Switch>
        </>
    );
}

export default App;
