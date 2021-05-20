const path = require('path');
const morgan = require('morgan');
const express = require('express');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

app.use(methodOverride('_method'));

//route folder
const route = require('./routes');

const db = require('./config/db');

// connect to DB
db.connect();

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
app.engine(
    'hds',
    handlebars({
        extname: '.hds',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);

app.set('view engine', 'hds');
app.set('views', path.join(__dirname, 'resources', 'views'));

// route init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
