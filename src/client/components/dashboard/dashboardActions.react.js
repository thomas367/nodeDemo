import React from 'react';
import { Link } from 'react-router-dom';
import styles from 'client/components/dashboard/dashboard.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBlackTie } from '@fortawesome/fontawesome-free-brands';

const cx = classNames.bind(styles);

const DashboardActions = () => (
    <>
        <Link to="/editProfile" className={cx('btn', 'btnLight')}>
            <FontAwesomeIcon icon={faUserCircle} /> Edit Profile
        </Link>
        <Link to="/addExperience" className={cx('btn', 'btnLight')}>
            <FontAwesomeIcon icon={faBlackTie} /> Add Experience
        </Link>
        <Link to="/addEducation" className={cx('btn', 'btnLight')}>
            <FontAwesomeIcon icon={faGraduationCap} /> Add Education
        </Link>
    </>
);

export default DashboardActions;
