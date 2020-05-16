import React from 'react';
import PropTypes from 'prop-types';
import styles from 'client/components/dashboard/details/details.scss';
import AlertMessage from 'client/components/layout/alertMessage/alertMessage.react';
import Moment from 'react-moment';
import { Button } from '@material-ui/core';
import { inject, observer } from 'mobx-react';

const Education = props => {
    const { education, deleteEducation } = props;

    const handleDelete = (e, id) => {
        e.preventDefault();
        deleteEducation(id)
            .then(() => {
                return <AlertMessage alertType="success" message="Education deleted successfully" call={true} />;
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

    const educations = education.map(edu => (
        <tr key={edu._id}>
            <td>{edu.school}</td>
            <td>{edu.degree}</td>
            <td>
                <Moment format="YYYY/MM/DD">{edu.from}</Moment> -
                {edu.to === null ? 'Now' : <Moment format="YYYY/MM/DD">{edu.to}</Moment>}
            </td>
            <td>
                <Button variant="contained" color="secondary" onClick={e => handleDelete(e, edu._id)}>
                    Delete
                </Button>
            </td>
        </tr>
    ));

    return (
        <>
            <h2 className={styles.details}>Education Credentials</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>School</th>
                        <th>Degree</th>
                        <th>Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{educations}</tbody>
            </table>
        </>
    );
};

Education.propTypes = {
    education: PropTypes.array,
    deleteEducation: PropTypes.func
};

export default inject(stores => ({
    deleteEducation: stores.profile.deleteEducation
}))(observer(Education));
