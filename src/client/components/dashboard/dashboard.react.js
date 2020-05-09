import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from 'client/components/dashboard/dashboard.scss';
import classNames from 'classnames/bind';
import Spinner from 'client/components/layout/spinner/spinner.react';
import DashboardActions from 'client/components/dashboard/dashboardActions.react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { inject, observer } from 'mobx-react';

const cx = classNames.bind(styles);

const Dashboard = props => {
    const { getProfile, loading, profile } = props;

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <div className={styles.container}>
            {loading && profile === null ? (
                <Spinner />
            ) : (
                <>
                    <h1 className={styles.header}>Dashboard</h1>
                    <p className={styles.subheader}>
                        <FontAwesomeIcon icon={faUser} /> Welcome
                    </p>
                    {profile !== null ? (
                        <>
                            <DashboardActions />
                        </>
                    ) : (
                        <>
                            <p>You have not yet setup a profile, please add some info</p>
                            <Link to="/createProfile" className={cx('btn', 'btnPrimary')}>
                                Create profile
                            </Link>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

Dashboard.propTypes = {
    getProfile: PropTypes.func,
    loading: PropTypes.bool,
    profile: PropTypes.object
    // error
};

export default inject(stores => ({
    getProfile: stores.profile.getProfile,
    loading: stores.profile.loading,
    profile: stores.profile.profile
    // error: stores.profile.error
}))(observer(Dashboard));
