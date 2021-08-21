const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/UserController');

router.get('/listUser', userController.listUser);
router.get('/login', userController.login);
router.post('/postsignin', userController.postsignin);
router.post('/postlogin', userController.postlogin);
router.get('/signin', userController.signin);
module.exports = router;
