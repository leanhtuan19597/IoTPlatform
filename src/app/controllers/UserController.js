const User = require('../models/User');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
class UserController {
    // [GET] /courses/:slug
    show(req, res, next) {
        Promise.all([User.find({}), User.countDocumentsDeleted()])
            .then(([user, deletedCount]) =>
                res.render('user/show', {
                    deletedCount,
                    user: mutipleMongooseToObject(user),
                }),
            )
            .catch(next);
    }
    // [GET] /user/signin
    signin(req, res, next) {
        // res.send(body.json());
        res.render('user/signup');
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
                    res.redirect('/user/show');
                    // res.json('dang nhap thanh cong');
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
                        .then(() => res.redirect('/signin'))
                        .catch((error) => {
                            res.status(500).json('tao tai khoan that bai');
                        });
                }
            })
            .catch((err) => {
                res.status(500).json('tao tai khoan that bai');
            });
    }
    edit(req, res, next) {
        User.findById(req.params.id)
            .then((user) =>
                res.render('user/edit', {
                    user: mongooseToObject(user),
                }),
            )

            .catch(next);
    }
    // [PUT] /user/:id
    update(req, res, next) {
        User.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/user/show'))
            .catch(next);
    }
    // [DELETE] /user/:id
    destroy(req, res, next) {
        User.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    // [GET] /me/trash/courses
    trashUser(req, res, next) {
        User.findDeleted({})
            .then((user) =>
                res.render('user/trash-user', {
                    user: mutipleMongooseToObject(user),
                }),
            )
            .catch(next);
    }
    // xóa vĩnh viễn
    forceDestroy(req, res, next) {
        User.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //Phục hồi
    // [PATCH] /user/:id/restore
    restore(req, res, next) {
        User.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new UserController();
