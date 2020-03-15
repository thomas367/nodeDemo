const express = require('express');
const router =  express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

const User = require('../../models/User');

/**
 *  @route      POST api/auth
 *  @desc       Auth user
 */
router.post('/', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Passoword id required').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ errors: [{ message: 'Invalid Credentials' }] });
        }

        const isMatched = await bcrypt.compare(password, user.password);

        if (!isMatched) {
            return res.status(400).json({ errors: [{ message: 'Invalid Credentials' }] });
        }

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload, 
            process.env.jwtSecret,
            {expiresIn: 36000},
            (err, token) => {
                if (err) throw err;
                res.json({ token });
        });

    } catch(err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
