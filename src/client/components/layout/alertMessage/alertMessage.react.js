import React from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import styles from 'client/components/layout/alertMessage/alertMessage.scss';
import PropTypes from 'prop-types';

const AlertMessage = props => {
    const { alertType, message, call } = props;

    const [open, setOpen] = React.useState(call);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Snackbar
            className={styles.snackbarStyle}
            open={open}
            autoHideDuration={2500}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            onClose={handleClose}
        >
            <Alert severity={alertType} variant="filled">
                {message}
            </Alert>
        </Snackbar>
    );
};

AlertMessage.propTypes = {
    alertType: PropTypes.string,
    message: PropTypes.string,
    call: PropTypes.bool
};

export default AlertMessage;
