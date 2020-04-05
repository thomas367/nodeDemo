const express = require('express');
const router = express.Router();

// Import controllers
const authCtrl = require('../controllers/authController');
const profileCtrl = require('../controllers/profileController');

// Import middlewares
const auth = require('../middleware/auth');
const validation = require('../middleware/validations/authValidation');

router.post('/login', validation.login, authCtrl.login);
router.post('/register', validation.register, authCtrl.register);
router.get('/profile', auth , profileCtrl.getProfile);

module.exports = router;