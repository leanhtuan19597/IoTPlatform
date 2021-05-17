const path = require('path');
const morgan = require('morgan');
const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

//route folder
const route = require('./routes');

//
app.use(express.static(path.join(__dirname, 'public')));

//middleware engine POST
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//HTTP logger
// app.use(morgan('combined'))

// Template engine
app.engine('hds', handlebars({ extname: '.hds' }));

app.set('view engine', 'hds');
app.set('views', path.join(__dirname, 'resources', 'views'));

// route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
