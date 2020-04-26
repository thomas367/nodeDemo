import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import styles from 'client/components/layout/landing/landing.scss';
import classNames from 'classnames/bind';
import { inject, observer } from 'mobx-react';

const cx = classNames.bind(styles);

const Landing = props => {
    const { token } = props;

    if (token) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className={styles.landing}>
            <div className={styles.darkOverlay}>
                <div className={styles.landingInner}>
                    <h1 className={styles.header}>Developer Connector</h1>
                    <p className={styles.introMessag}>
                        Create a developer profile/portfolio, share posts and get help from other developers
                    </p>
                    <div className={styles.buttonsWrapper}>
                        <Link to="/register" className={cx('btn', 'btnPrimary')}>
                            Sign Up
                        </Link>
                        <Link to="/login" className={cx('btn', 'btnLight')}>
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Landing.propTypes = {
    token: PropTypes.string
};

export default inject(stores => ({
    token: stores.common.token
}))(observer(Landing)); 
