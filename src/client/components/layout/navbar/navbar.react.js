import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from 'client/components/layout/navbar/navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { inject, observer } from 'mobx-react';

const Navbar = (props) => {
    const { token, logout } = props;

    const handleLogout = () => {
        logout();
    };

    return (
        <nav className={styles.navbar}>
            <h1>
                <Link className={styles.bannerLink} to="/">
                    <FontAwesomeIcon icon={faCode} /> DevConnector
                </Link>
            </h1>
            <div className={styles.linksWrapper}>
                {token ? (
                    <>
                        <Link className={styles.links} to="/">
                            <FontAwesomeIcon icon={faUser} /> Dashboard
                        </Link>
                        <Link className={styles.links} onClick={handleLogout} to="/">
                            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                        </Link>
                    </>
                ) : (
                    <>
                        <Link className={styles.links} to="#!">
                            Developers
                        </Link>
                        <Link className={styles.links} to="/register">
                            Register
                        </Link>
                        <Link className={styles.links} to="/login">
                            Login
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    token: PropTypes.string,
    logout: PropTypes.func
};

export default inject((stores) => ({
    token: stores.common.token,
    logout: stores.auth.logout
}))(observer(Navbar));
