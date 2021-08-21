const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    // [GET] /
    index(req, res, next) {
        // Course.find({}, function(err, Courses){
        //     if(!err){
        //         res.json(Courses)
        //     }else{
        //         res.status(400).json({ error: 'ERROR!!!'})
        //     }
        // })
        Course.find({})
            .then((course) => {
                res.render('home', {
                    course: mutipleMongooseToObject(course),
                });
            })
            .catch(next);
        res.render('home');
    }

    // [GET] / search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
