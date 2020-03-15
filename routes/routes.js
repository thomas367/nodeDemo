const express = require('express');
const router =  express.Router();
const authCtrl = require('../controllers/authController');
const validation = require('../middleware/validations/authValidation');

router.post('/login', validation.login, authCtrl.login);
router.post('/register', validation.register, authCtrl.register);

module.exports = router;