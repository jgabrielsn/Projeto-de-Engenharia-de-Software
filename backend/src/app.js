const express = require('express');

const app = express();

const passport = require('passport');

require('./passportConfig')(passport);

app.use(passport.initialize());

app.use(express.json());

app.use(require('./routers/routerUsers'));
app.use(require('./routers/routerContas'));
app.use(require('./routers/routerGastos'));
 
module.exports = app;