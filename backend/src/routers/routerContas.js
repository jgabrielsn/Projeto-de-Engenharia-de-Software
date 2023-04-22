const express = require('express');
const router = express.Router();

const contaController = require('../controllers/contaController');
const contasMiddleware = require('../middlewares/contasMiddlewares');


// lista todas as contas 
router.get('/contas', contaController.getAll);

//insere conta
router.post('/contas',contasMiddleware.validateBody, contaController.createConta);

//deletar conta
router.delete('/contas/:codigo', contaController.deleteConta);

//atualizar conta
router.put('/contas/:codigo', contasMiddleware.validateBody, contaController.updateConta);

//lista todas as contas por id usuário
router.get('/users/contas/:id', contaController.getAllContasByID);

//lista conta por código
router.get('/contas/:codigo', contaController.getContaByCodigo);



// lista todos as contas do usuário


module.exports = router;