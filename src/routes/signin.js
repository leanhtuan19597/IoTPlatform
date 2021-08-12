const express = require('express');
const router = express.Router();

const signinController = require('../app/controllers/SigninController');

router.get('/', signinController.index);

module.exports = router;
