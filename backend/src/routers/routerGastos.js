const express = require('express');
const router = express.Router();

const gastoController = require('../controllers/gastoController');
const gastosMiddleware = require('../middlewares/gastosMiddlewares');

// lista todos os gastos
router.get('/gastos', gastoController.getAll);

//insere gasto
router.post('/gastos',gastosMiddleware.validateBody, gastoController.createGasto);

//deletar gasto
router.delete('/gastos/:codigo', gastoController.deleteGasto);

//atualizar gasto
router.put('/gastos/:codigo', gastosMiddleware.validateBody, gastoController.updateGasto);

module.exports = router;