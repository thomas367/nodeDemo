import React from 'react';
import styles from 'client/components/auth/register/register.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Sign Up</h1>
            <p className={styles.subheader}>
                <FontAwesomeIcon icon={faUser} /> Create Your Account
            </p>
            <form>
                <div className={styles.formGroup}>
                    <TextField type="text" size="small" placeholder="Name" name="name" fullWidth variant="outlined" />
                </div>
                <div className={styles.formGroup}>
                    <TextField
                        type="email"
                        size="small"
                        placeholder="Email Address"
                        name="email"
                        fullWidth
                        variant="outlined"
                    />
                </div>
                <div className={styles.formGroup}>
                    <TextField
                        type="password"
                        size="small"
                        placeholder="Password"
                        name="password"
                        fullWidth
                        variant="outlined"
                    />
                </div>
                <div className={styles.formGroup}>
                    <TextField
                        type="password"
                        size="small"
                        placeholder="Confirm Password"
                        name="password2"
                        fullWidth
                        variant="outlined"
                    />
                </div>
                <Button type="submit" variant="contained" color="primary">
                    Register
                </Button>
            </form>
            <p className={styles.alternateLogin}>
                Already have an account?
                <Link to="/login" className={styles.link}>
                    Sign In
                </Link>
            </p>
        </div>
    );
};

export default Register;
