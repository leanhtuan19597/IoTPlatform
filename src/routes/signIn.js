const express = require('express');
const router = express.Router();
const signInController = require('../app/controllers/SignInController');

router.get('/', signInController.signIn);
router.post('/postlogin', signInController.postSignIn);

module.exports = router;
