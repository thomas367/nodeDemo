import React from 'react';
import PropTypes from 'prop-types';
import styles from 'client/components/profile/addEducationProfile/addEducationProfile.scss';
import { Button, TextField, Checkbox } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import AlertMessage from 'client/components/layout/alertMessage/alertMessage.react';
import { inject, observer } from 'mobx-react';

const AddEducationProfile = props => {
    const { submitEducation, messages } = props;

    const [formData, setFormData] = React.useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false
    });

    const { school, degree, fieldofstudy, from, to, current } = formData;

    const [startDate, setStartDate] = React.useState(from ? from : new Date());
    const [endDate, setEndDate] = React.useState(to ? to : new Date());

    const handleStartDate = e => {
        setStartDate(e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleEndDate = e => {
        setEndDate(e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleInput = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.checked });
    };

    let history = useHistory();
    const handleSubmitForm = e => {
        e.preventDefault();
        submitEducation(formData).then(response => {
            if (response.status === 200) {
                history.push('/dashboard');
            }
        });
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Add Your Education</h1>
            <p className={styles.subheader}>
                <FontAwesomeIcon icon={faGraduationCap} /> Add any school, bootcamp, etc that you have attended
            </p>
            <small>* = required field</small>
            <form onSubmit={e => handleSubmitForm(e)}>
                <div className={styles.formGroup}>
                    <TextField
                        type="text"
                        placeholder="* School or Bootcamp"
                        name="school"
                        required
                        size="small"
                        fullWidth
                        variant="outlined"
                        value={school}
                        onChange={e => handleInput(e)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <TextField
                        type="text"
                        placeholder="* Degree or Certificate"
                        name="degree"
                        required
                        size="small"
                        fullWidth
                        variant="outlined"
                        value={degree}
                        onChange={e => handleInput(e)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <TextField
                        type="text"
                        placeholder="Field Of Study"
                        name="fieldofstudy"
                        size="small"
                        fullWidth
                        variant="outlined"
                        value={fieldofstudy}
                        onChange={e => handleInput(e)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <h4>From Date</h4>
                    <TextField type="date" name="from" value={startDate} onChange={e => handleStartDate(e)} />
                </div>
                <div className={styles.formGroup}>
                    <p>
                        <Checkbox name="current" color="default" checked={current} onChange={e => handleChange(e)} />
                        Current School or Bootcamp
                    </p>
                </div>
                <div className={styles.formGroup}>
                    <h4>To Date</h4>
                    <TextField
                        type="date"
                        name="to"
                        disabled={current}
                        value={endDate}
                        onChange={e => handleEndDate(e)}
                    />
                </div>
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
            <Link to="/dashboard" className={styles.link}>
                Go Back
            </Link>
            <div className={styles.alertWrapper}>
                {messages &&
                    Array.isArray(messages) &&
                    messages.map((message, index) => (
                        <AlertMessage key={index} alertType="error" message={message.msg} call={true} />
                    ))}
            </div>
        </div>
    );
};

AddEducationProfile.propTypes = {
    submitEducation: PropTypes.func,
    messages: PropTypes.array
};

export default inject(stores => ({
    submitEducation: stores.profile.submitEducation,
    messages: stores.profile.messages
}))(observer(AddEducationProfile));
