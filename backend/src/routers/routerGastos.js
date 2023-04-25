const express = require('express');
const router = express.Router();
const passport = require('passport');

const gastoController = require('../controllers/gastoController');
const gastosMiddleware = require('../middlewares/gastosMiddlewares');


// lista todos os gastos
router.get('/gastos', passport.authenticate('jwt', {session: false}), gastoController.getAll);

//insere gasto
router.post('/gastos', passport.authenticate('jwt', {session: false}), gastosMiddleware.validateBody, gastoController.createGasto);

//deletar gasto
router.delete('/gastos/:codigo', passport.authenticate('jwt', {session: false}), gastoController.deleteGasto);

//atualizar gasto
router.put('/gastos/:codigo', passport.authenticate('jwt', {session: false}), gastosMiddleware.validateBody, gastoController.updateGasto);

//lista gastos por id
router.get('/users/gastos/:id', passport.authenticate('jwt', {session: false}), gastoController.getAllGastosByID);

//pegar gasto por codigo
router.get('/gastos/:codigo', passport.authenticate('jwt', {session: false}), gastosMiddleware.validateCodigo, gastoController.getGastoByCodigo);

module.exports = router;