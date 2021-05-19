const express = require('express');
const router = express.Router();

const sourceController = require('../app/controllers/CourseController');

router.get('/create', sourceController.create);
router.post('/store', sourceController.store);
router.get('/:slug', sourceController.show);

module.exports = router;
