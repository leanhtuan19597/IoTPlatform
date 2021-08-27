const User = require('../models/User');

class SignInController {
    // [GET] /useren/login
    signIn(req, res, next) {
        // res.send(body.json());
        res.render('user/signIn');
    }
    // [POST] /useren/login
    postSignIn(req, res, next) {
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
}
module.exports = new SignInController();
