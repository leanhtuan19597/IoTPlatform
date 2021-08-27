const Course = require('../models/Course');
class NewsController {
    // [GET] /news
    index(req, res) {
        Course.findOne({ slug: req.params.slug });
        res.render('news');
    }
    // [GET] /news/:slug
    show(req, res) {
        res.send('NEWS DETAIL');
    }
}

module.exports = new NewsController();
