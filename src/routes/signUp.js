const express = require('express');
const router = express.Router();
const signUpController = require('../app/controllers/SignUpController');

router.get('/', signUpController.signUp);
router.post('/postSignUp', signUpController.postSignUp);

module.exports = router;
