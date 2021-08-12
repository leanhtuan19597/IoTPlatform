const Course = require('../models/Signin');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SigninController {
    // [GET] /
    index(req, res, next) {
        res.render('signin');
        // Signin.find({})
        //     .then((signin) => {
        //         res.render('home', {
        //             signin: mutipleMongooseToObject(signin),
        //         });
        //     })
        // .catch(next);
        // res.render('home')
    }

    // [GET] / search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SigninController();
