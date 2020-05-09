const Profile = require('../models/Profile');
const User = require('../models/User');

exports.getProfile = async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'avatar']);
        if (!profile) {
            return res.status(400).json({ msg: 'There is no profile for this user' });
        }

        res.json(profile.user.name);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
};

exports.createOrUpdateProfile = async (req, res) => {
    const { company, website, location, status, skills, github, linkedin, facebook, twitter } = req.body;

    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (company) profileFields.company = company;
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (status) profileFields.status = status;
    if (skills) {
        profileFields.skills = skills.split(',').map(skill => skill.trim);
    }

    // Build social object
    profileFields.social = {};
    if (github) profileFields.social.github = github;
    if (linkedin) profileFields.social.linkedin = linkedin;
    if (facebook) profileFields.social.facebook = facebook;
    if (twitter) profileFields.social.twitter = twitter;

    try {
        let profile = await Profile.findOne({ user: req.user.id });

        if (profile) {
            profile = await Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileFields }, { new: true });
            return res.json(profile);
        }

        profile = new Profile(profileFields);
        await profile.save();
        res.json(profile);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
};

exports.getProfileById = async (req, res) => {
    try {
        const profile = await Profile.find({ user: req.params.userId }).populate('user', ['name', 'avatar']);

        if (!profile) {
            return res.status(400).json({ msg: 'Porfile not found' });
        }

        res.json(profile);
    } catch (err) {
        console.log(err);
        if (err.kind === 'ObjectId') {
            return res.status(400).json({ msg: 'Profile not found' });
        }
        res.status(500).send('Server error');
    }
};

exports.deleteProfile = async (req, res) => {
    try {
        await Profile.findOneAndRemove({ user: req.user.id });
        await User.findOneAndRemove({ _id: req.user.id });
        res.json({ msg: 'User removed' });
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
};

exports.createOrUpdateExperience = async (req, res) => {
    const { title, company, location, from, to, current, description } = req.body;
    const newExp = { title, company, location, from, to, current, description };

    try {
        const profile = await Profile.findOne({ user: req.user.id });

        profile.experience.unshift(newExp);
        await profile.save();
        res.json(profile);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
};

exports.deleteExperience = async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id });
        const removeIndex = profile.experience.map(item => item.id).indexOf(req.params.expId);

        profile.experience.splice(removeIndex, 1);
        await profile.save();
        res.json(profile);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
};

exports.createOrUpdateEducation = async (req, res) => {
    const { school, degree, fieldofstudy, from, to, current, description } = req.body;
    const newEdu = { school, degree, fieldofstudy, from, to, current, description };

    try {
        const profile = await Profile.findOne({ user: req.user.id });

        profile.education.unshift(newEdu);
        await profile.save();
        res.json(profile);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
};

exports.deleteEducation = async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id });
        const removeIndex = profile.education.map(item => item.id).indexOf(req.params.eduId);

        profile.education.splice(removeIndex, 1);
        await profile.save();
        res.json(profile);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
};
