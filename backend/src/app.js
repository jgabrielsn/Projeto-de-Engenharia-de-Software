const express = require('express');
const routerContas = require('./routers/routerContas');
const routergastos = require('./routers/routerGastos');

const app = express();

app.use(express.json());
app.use(routerContas);
app.use(routergastos);
 
module.exports = app;