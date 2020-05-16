import React from 'react';
import PropTypes from 'prop-types';
import styles from 'client/components/dashboard/details/details.scss';
import Moment from 'react-moment';
import AlertMessage from 'client/components/layout/alertMessage/alertMessage.react';
import { Button } from '@material-ui/core';
import { inject, observer } from 'mobx-react';

const Experience = props => {
    const { experience, deleteExperience } = props;

    const handleDelete = (e, id) => {
        e.preventDefault();
        deleteExperience(id)
            .then(() => {
                return <AlertMessage alertType="success" message="Experience deleted successfully" call={true} />;
            })
            .catch(() => {
                return (
                    <AlertMessage
                        alertType="error"
                        message="Something wrorn happened. Please try again later."
                        call={true}
                    />
                );
            });
    };

    const experiences = experience.map(exp => (
        <tr key={exp._id}>
            <td>{exp.company}</td>
            <td>{exp.title}</td>
            <td>
                <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
                {exp.to === null ? 'Now' : <Moment format="YYYY/MM/DD">{exp.to}</Moment>}
            </td>
            <td>
                <Button variant="contained" color="secondary" onClick={e => handleDelete(e, exp._id)}>
                    Delete
                </Button>
            </td>
        </tr>
    ));

    return (
        <>
            <h2 className={styles.header}>Experience Credentials</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Title</th>
                        <th>Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{experiences}</tbody>
            </table>
        </>
    );
};

Experience.propTypes = {
    experience: PropTypes.array,
    deleteExperience: PropTypes.func
};

export default inject(stores => ({
    deleteExperience: stores.profile.deleteExperience
}))(observer(Experience));
