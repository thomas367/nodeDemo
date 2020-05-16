import React from 'react';
import PropTypes from 'prop-types';
import styles from 'client/components/profile/createOrUpdateProfile/profile.scss';
import classNames from 'classnames/bind';
import { Button, TextField, Select, MenuItem, FormHelperText } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faTwitter, faFacebook } from '@fortawesome/fontawesome-free-brands';
import { Link, useHistory } from 'react-router-dom';
import AlertMessage from 'client/components/layout/alertMessage/alertMessage.react';
import { inject, observer } from 'mobx-react';

const cx = classNames.bind(styles);

const CreateProfile = props => {
    const { submitProfile, messages } = props;

    const [formData, setFormData] = React.useState({
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        github: '',
        twitter: '',
        facebook: '',
        linkedin: ''
    });

    const { company, website, location, status, skills, github, twitter, facebook, linkedin } = formData;

    const [toggleSocialInputs, setToggleSocialInputs] = React.useState(false);
    const [selectedStatus, setSelectedStatus] = React.useState(status);

    const handleChange = e => {
        setSelectedStatus(e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleInput = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    let history = useHistory();
    const handleSubmitForm = e => {
        e.preventDefault();
        submitProfile(formData).then(response => {
            if (response.status === 200) {
                history.push('/dashboard');
            }
        });
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Create Your Profile</h1>
            <p className={styles.subheader}>
                <FontAwesomeIcon icon={faUser} /> Lets get some information to make your profile stand out
            </p>
            <small>* = required field</small>
            <form onSubmit={e => handleSubmitForm(e)}>
                <div className={styles.formGroup}>
                    <Select
                        name="status"
                        fullWidth
                        variant="outlined"
                        value={selectedStatus}
                        onChange={e => handleChange(e)}
                    >
                        <MenuItem value="">
                            <em>* Select Professional Status</em>
                        </MenuItem>
                        <MenuItem value="Developer">Developer</MenuItem>
                        <MenuItem value="Manager">Manager</MenuItem>
                        <MenuItem value="Student">Student</MenuItem>
                        <MenuItem value="Instructor">Instructor</MenuItem>
                        <MenuItem value="Intern">Intern</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                    </Select>
                    <FormHelperText>Give us an idea of where you are at in your career</FormHelperText>
                </div>
                <div className={styles.formGroup}>
                    <TextField
                        type="text"
                        placeholder="Company"
                        name="company"
                        size="small"
                        fullWidth
                        variant="outlined"
                        value={company}
                        onChange={e => handleInput(e)}
                    />
                    <FormHelperText>Could be your own company or one you work for</FormHelperText>
                </div>
                <div className={styles.formGroup}>
                    <TextField
                        type="text"
                        placeholder="Website"
                        name="website"
                        size="small"
                        fullWidth
                        variant="outlined"
                        value={website}
                        onChange={e => handleInput(e)}
                    />
                    <FormHelperText>Could be your own or a company website</FormHelperText>
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
                    <FormHelperText>City & state suggested (eg. Boston, MA)</FormHelperText>
                </div>
                <div className={styles.formGroup}>
                    <TextField
                        type="text"
                        placeholder="* Skills"
                        name="skills"
                        size="small"
                        fullWidth
                        variant="outlined"
                        value={skills}
                        onChange={e => handleInput(e)}
                    />
                    <FormHelperText>Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)</FormHelperText>
                </div>
                <div className={styles.toggleWrapper}>
                    <Button
                        onClick={() => setToggleSocialInputs(!toggleSocialInputs)}
                        type="button"
                        variant="contained"
                    >
                        Add Social Network Links
                    </Button>
                    <span>Optional</span>
                </div>
                {toggleSocialInputs && (
                    <>
                        <div className={cx('formGroup', 'socialInput')}>
                            <FontAwesomeIcon className={cx('icon', 'fa-3x', 'github')} icon={faGithub} />
                            <TextField
                                type="text"
                                placeholder="Github URL"
                                name="github"
                                size="small"
                                fullWidth
                                variant="outlined"
                                value={github}
                                onChange={e => handleInput(e)}
                            />
                        </div>

                        <div className={cx('formGroup', 'socialInput')}>
                            <FontAwesomeIcon className={cx('icon', 'fa-3x', 'twitter')} icon={faTwitter} />
                            <TextField
                                type="text"
                                placeholder="Twitter URL"
                                name="twitter"
                                size="small"
                                fullWidth
                                variant="outlined"
                                value={twitter}
                                onChange={e => handleInput(e)}
                            />
                        </div>

                        <div className={cx('formGroup', 'socialInput')}>
                            <FontAwesomeIcon className={cx('icon', 'fa-3x', 'facebook')} icon={faFacebook} />
                            <TextField
                                type="text"
                                placeholder="Facebook URL"
                                name="facebook"
                                size="small"
                                fullWidth
                                variant="outlined"
                                value={facebook}
                                onChange={e => handleInput(e)}
                            />
                        </div>

                        <div className={cx('formGroup', 'socialInput')}>
                            <FontAwesomeIcon className={cx('icon', 'fa-3x', 'linkedIn')} icon={faLinkedinIn} />
                            <TextField
                                type="text"
                                placeholder="Linkedin URL"
                                name="linkedin"
                                size="small"
                                fullWidth
                                variant="outlined"
                                value={linkedin}
                                onChange={e => handleInput(e)}
                            />
                        </div>
                    </>
                )}
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

CreateProfile.propTypes = {
    submitProfile: PropTypes.func,
    messages: PropTypes.array
};

export default inject(stores => ({
    submitProfile: stores.profile.submitProfile,
    messages: stores.profile.messages
}))(observer(CreateProfile));
