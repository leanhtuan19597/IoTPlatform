const User = require('../models/User');

class SignUpController {
    // [GET] /user/signin
    signUp(req, res, next) {
        // res.send(body.json());
        res.render('user/signup');
    }

    // [POST] /useren/signin
    postSignUp(req, res, next) {
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
                        .then(() => res.redirect('/sigin'))
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
module.exports = new SignUpController();
