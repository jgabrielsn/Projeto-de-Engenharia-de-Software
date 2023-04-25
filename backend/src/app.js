const express = require('express');

const cors = require('cors');

const app = express();

const passport = require('passport');

require('./passportConfig')(passport);

app.use(passport.initialize());

app.use(cors());

app.use(express.json());

app.use(require('./routers/routerUsers'));
app.use(require('./routers/routerContas'));
app.use(require('./routers/routerGastos'));


module.exports = app;

