import React from 'react';
import styles from 'client/components/auth/login/login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Sign In</h1>
            <p className={styles.subheader}>
                <FontAwesomeIcon icon={faUser} /> Sign into Your Account
            </p>
            <form>
                <div className={styles.formGroup}>
                    <TextField
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        size="small"
                        fullWidth
                        variant="outlined"
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
                    />
                </div>
                <Button type="submit" variant="contained" color="primary">
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

export default Login;
