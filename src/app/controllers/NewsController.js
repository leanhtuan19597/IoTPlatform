const Course = require('../models/Course');
class NewsController {
    // [GET] /news
    index(req, res) {
        Course.findOne({ slug: req.params.slug });
        res.json(course);
        // .then((course) =>
        //     res.json(course);
        //     // res.render('courses/show', {
        //     //     course: mongooseToObject(course),
        //     // }),
        // )
        // .catch(next);

        // res.render('news');
    }
    // [GET] /news/:slug
    show(req, res) {
        res.send('NEWS DETAIL');
    }
}

module.exports = new NewsController();
