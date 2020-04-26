import React from 'react';
import styles from 'client/components/layout/spinner/spinner.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Spinner = () => (
    <>
        <FontAwesomeIcon className={cx('icon', 'fa-spin')} icon={faSpinner} />
    </>   
);

export default Spinner;