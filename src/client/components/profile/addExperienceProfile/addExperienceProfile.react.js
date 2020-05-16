import React from 'react';
import PropTypes from 'prop-types';
import styles from 'client/components/profile/addExperienceProfile/addExperienceProfile.scss';
import { Button, TextField, Checkbox } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import AlertMessage from 'client/components/layout/alertMessage/alertMessage.react';
import { inject, observer } from 'mobx-react';

const AddExperienceProfile = props => {
    const { submitExperience, messages } = props;

    const [formData, setFormData] = React.useState({
        company: '',
        title: '',
        location: '',
        from: '',
        to: '',
        current: false
    });

    const { company, title, location, from, to, current } = formData;

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
        submitExperience(formData).then(response => {
            if (response.status === 200) {
                history.push('/dashboard');
            }
        });
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Add An Experience</h1>
            <p className={styles.subheader}>
                <FontAwesomeIcon icon={faCodeBranch} /> Add any developer/programming positions that you have had in the
                past
            </p>
            <small>* = required field</small>
            <form onSubmit={e => handleSubmitForm(e)}>
                <div className={styles.formGroup}>
                    <TextField
                        type="text"
                        placeholder="* Job Title"
                        name="title"
                        required
                        size="small"
                        fullWidth
                        variant="outlined"
                        value={title}
                        onChange={e => handleInput(e)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <TextField
                        type="text"
                        placeholder="* Company"
                        name="company"
                        required
                        size="small"
                        fullWidth
                        variant="outlined"
                        value={company}
                        onChange={e => handleInput(e)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <TextField
                        type="text"
                        placeholder="Location"
                        name="location"
                        size="small"
                        fullWidth
                        variant="outlined"
                        value={location}
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
                        Current Job
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

AddExperienceProfile.propTypes = {
    submitExperience: PropTypes.func,
    messages: PropTypes.array
};

export default inject(stores => ({
    submitExperience: stores.profile.submitExperience,
    messages: stores.profile.messages
}))(observer(AddExperienceProfile));
