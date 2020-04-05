import React from 'react';
import { Link } from 'react-router-dom';
import styles from 'client/components/layout/navbar/navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <h1>
                <Link className={styles.bannerLink} to="/">
                    <FontAwesomeIcon icon={faCode} /> DevConnector
                </Link>
            </h1>
            <div className={styles.linksWrapper}>
                <Link className={styles.links} to="!#">
                    Developers
                </Link>
                <Link className={styles.links} to="/register">
                    Register
                </Link>
                <Link className={styles.links} to="/login">
                    Login
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
