import React from 'react';
import PropTypes from 'prop-types';
import styles from 'client/components/auth/login/login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Button, TextField } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

const Login = props => {
    const { inProgress, token, doLogin } = props;

    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const handleInput = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmitForm = e => {
        e.preventDefault();
        doLogin(formData);
    };

    if (token) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Sign In</h1>
            <p className={styles.subheader}>
                <FontAwesomeIcon icon={faUser} /> Sign into Your Account
            </p>
            <form onSubmit={e => handleSubmitForm(e)}>
                <div className={styles.formGroup}>
                    <TextField
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        size="small"
                        fullWidth
                        variant="outlined"
                        value={email}
                        onChange={e => handleInput(e)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <TextField
                        type="password"
                        placeholder="Password"
                        name="password"
                        size="small"
                        fullWidth
                        variant="outlined"
                        value={password}
                        onChange={e => handleInput(e)}
                    />
                </div>
                <Button type="submit" variant="contained" color="primary" disabled={inProgress}>
                    Login
                </Button>
            </form>
            <p className={styles.alternateRegister}>
                Don't have an account?
                <Link to="/register" className={styles.link}>
                    Sign Up
                </Link>
            </p>
        </div>
    );
};

Login.propTypes = {
    inProgress: PropTypes.bool,
    token: PropTypes.string,
    doLogin: PropTypes.func
};

export default inject(stores => ({
    inProgress: stores.auth.inProgress,
    // errors: stores.auth.errors,
    doLogin: stores.auth.doLogin,
    token: stores.common.token
}))(observer(Login));
