import React from 'react';
import PropTypes from 'prop-types';
import styles from 'client/components/auth/register/register.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Button, TextField } from '@material-ui/core';
import AlertMessage from 'client/components/layout/alertMessage/alertMessage.react';
import { Link, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

const Register = props => {
    const { inProgress, token, doRegister, messages } = props;

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { name, email, password, confirmPassword } = formData;

    const handleInput = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmitForm = e => {
        e.preventDefault();
        const newUser = { name, email, password };
        doRegister(newUser);
    };

    if (token) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Sign Up</h1>
            <p className={styles.subheader}>
                <FontAwesomeIcon icon={faUser} /> Create Your Account
            </p>
            <form onSubmit={e => handleSubmitForm(e)}>
                <div className={styles.formGroup}>
                    <TextField
                        type="text"
                        size="small"
                        placeholder="Name"
                        name="name"
                        fullWidth
                        variant="outlined"
                        value={name}
                        onChange={e => handleInput(e)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <TextField
                        type="email"
                        size="small"
                        placeholder="Email Address"
                        name="email"
                        fullWidth
                        variant="outlined"
                        value={email}
                        onChange={e => handleInput(e)}
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
                        value={password}
                        onChange={e => handleInput(e)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <TextField
                        type="password"
                        size="small"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        fullWidth
                        variant="outlined"
                        value={confirmPassword}
                        onChange={e => handleInput(e)}
                    />
                </div>
                <Button type="submit" variant="contained" color="primary" disabled={inProgress}>
                    Register
                </Button>
            </form>
            <p className={styles.alternateLogin}>
                Already have an account?
                <Link to="/login" className={styles.link}>
                    Sign In
                </Link>
            </p>
            <div className={styles.alertWrapper}>
                {messages &&
                    Array.isArray(messages) &&
                    messages.map((message, index) => (
                        <AlertMessage key={index} alertType="error" message={message.msg} call={true} />
                    ))}
            </div>
        </div>
    );
};

Register.propTypes = {
    inProgress: PropTypes.bool,
    token: PropTypes.string,
    doRegister: PropTypes.func,
    messages: PropTypes.array
};

export default inject(stores => ({
    inProgress: stores.auth.inProgress,
    messages: stores.auth.messages,
    doRegister: stores.auth.doRegister,
    token: stores.common.token
}))(observer(Register));
