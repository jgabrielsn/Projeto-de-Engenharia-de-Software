const express = require('express');
const passport = require('passport');

const app = express();

require('./passportConfig')(passport);

app.use(passport.initialize());

app.use(express.json());

app.use(require('./routes/index'));
app.use(require('./routes/userRouter'));
 
module.exports = app;