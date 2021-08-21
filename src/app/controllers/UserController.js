const User = require('../models/User');
const { mongooseToObject } = require('../../util/mongoose');
class UserController {
    // [GET] /courses/:slug
    listUser(req, res, next) {
        User.findOne({ slug: req.params.slug })

            .then((user) =>
                res.render('user/show', {
                    user: mongooseToObject(user),
                    // res.json(course);
                }),
            )
            .catch(next);
    }
    // [GET] /user/signin
    signin(req, res, next) {
        // res.send(body.json());
        res.render('user/signin');
    }
    // [GET] /useren/login
    login(req, res, next) {
        // res.send(body.json());
        res.render('user/login');
    }
    // [POST] /useren/login
    postlogin(req, res, next) {
        const user = new User(req.body);
        const username = user.username;
        const password = user.password;
        User.findOne({
            username: username,
            password: password,
        })

            .then((data) => {
                if (data) {
                    // res.render('/me/stored/courses')
                    res.json('dang nhap thanh cong');
                } else {
                    res.status(300).json('accout khong dung');
                }
            })
            .catch((err) => {
                res.status(500).json('co loi ben server');
            });
    }

    // [POST] /useren/signin
    postsignin(req, res, next) {
        const user = new User(req.body);
        const username = user.username;
        User.findOne({
            username: username,
        })
            .then((data) => {
                if (data) {
                    res.json('user name da ton tai');
                } else {
                    user.save()
                        .then(() => res.redirect('/user/login'))
                        .catch((error) => {
                            res.status(500).json('tao tai khoan that bai');
                        });
                }
            })
            .catch((err) => {
                res.status(500).json('tao tai khoan that bai');
            });
    }
}

module.exports = new UserController();
