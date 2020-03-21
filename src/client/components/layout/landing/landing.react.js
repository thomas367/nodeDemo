import React from 'react';
import { Link } from 'react-router-dom';
import styles from 'client/components/layout/landing/landing.scss';

const Landing = () => {
    return (
        <section className={styles.landing}>
            <div className={styles.darkOverlay}>
                <div className={styles.landingInner}>
                    <h1 className={styles.header}>Developer Connector</h1>
                    <p className={styles.introMessag}>
                        Create a developer profile/portfolio, share posts and get help from other developers
                    </p>
                    <div className="buttons">
                        <Link to="/register" className="btn btn-primary">
                            Sign Up
                        </Link>
                        <Link to="/login" className="btn btn-light">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;
