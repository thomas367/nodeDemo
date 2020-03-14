const express = require('express');
const router =  express.Router();


//Test route
// /api/user route
router.get('/', (req, res) => res.send('User route'));

module.exports = router;
