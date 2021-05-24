const express = require('express');
const router = express.Router();

const sourceController = require('../app/controllers/CourseController');

router.post('/store', sourceController.store);

router.put('/:id', sourceController.update);

router.delete('/:id', sourceController.destroy);

router.get('/create', sourceController.create);
router.get('/:id/edit', sourceController.edit);
router.get('/:slug', sourceController.show);

module.exports = router;
