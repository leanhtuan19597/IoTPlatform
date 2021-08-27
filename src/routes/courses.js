const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');
//hiển thị danh sách khóa học
router.post('/store', courseController.store);

router.put('/:id', courseController.update);

router.patch('/:id/restore', courseController.restore);

//xóa tạm thời
router.delete('/:id', courseController.destroy);

//xóa vĩnh viễn
router.delete('/:id/force', courseController.forceDestroy);

// tạo khóa học mới
router.get('/create', courseController.create);

router.get('/:id/edit', courseController.edit);

router.get('/:slug', courseController.show);

module.exports = router;
