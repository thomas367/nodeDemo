const express = require('express');
const router = express.Router();

// Import controllers
const authCtrl = require('../controllers/authController');
const profileCtrl = require('../controllers/profileController');

// Import middlewares
const auth = require('../middleware/auth');
const authValidation = require('../middleware/validations/authValidation');
const profileValidation = require('../middleware/validations/profileValidation');

// auth routes
router.post('/login', authValidation.login, authCtrl.login);
router.post('/register', authValidation.register, authCtrl.register);

// profile routes
router.get('/profile/me', auth, profileCtrl.getProfile);
router.post('/profile', [auth, profileValidation.profile], profileCtrl.createOrUpdateProfile);
router.get('/profile/user/:userId', profileCtrl.getProfileById);
router.delete('/profile', auth, profileCtrl.deleteProfile);
router.put('/profile/experience', [auth, profileValidation.experience], profileCtrl.createOrUpdateExperience);
router.delete('/profile/experience/:expId', auth, profileCtrl.deleteExperience);
router.put('/profile/education', [auth, profileValidation.education], profileCtrl.createOrUpdateEducation);
router.delete('/profile/education/:eduId', auth, profileCtrl.deleteEducation);

module.exports = router;
