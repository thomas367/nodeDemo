
const User = require('../models/User');
// const Profile = require('../models/Profile');

exports.getProfile = async (req, res) => {

    try {
        const profile = await User.findOne({ _id: req.user.id });
        if (!profile) {
            return res.status(400).json({ message: 'There is no profile for this user'  });
        }

        res.json(profile.name);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
};