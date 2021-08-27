const userRouter = require('./user');
const coursesRouter = require('./courses');
const newsRouter = require('./news');
const meRouter = require('./me');
const siteRouter = require('./site');
const signInRouter = require('./signIn');
const signUpRouter = require('./signUp');

function route(app) {
    app.use('/user', userRouter);
    app.use('/courses', coursesRouter);
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/signUp', signUpRouter);
    app.use('/signIn', signInRouter);
    app.use('/', siteRouter);
}

module.exports = route;
