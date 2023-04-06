const express = require('express');
const router = require('./router');
const session = require('express-session');
const sessionStore = require('./models/session');

const app = express();

app.use(express.json());

app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));


app.use(router);
 
module.exports = app;