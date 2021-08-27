const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/UserController');

// phục hồi đã xóa tạm thời
router.patch('/:id/restore', userController.restore);

//hiển thị danh sách user
router.get('/trash-user', userController.trashUser);

//xóa vĩnh viễn
router.delete('/:id/force', userController.forceDestroy);

//xóa tạm thời
router.delete('/:id', userController.destroy);

router.put('/:id', userController.update);

router.get('/:id/edit', userController.edit);

router.get('/show', userController.show);
router.get('/login', userController.login);
router.post('/postsignin', userController.postsignin);
router.post('/postlogin', userController.postlogin);
router.get('/signin', userController.signin);
module.exports = router;
