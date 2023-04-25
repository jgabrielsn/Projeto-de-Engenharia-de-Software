const express = require('express');
const router = express.Router();
const passport = require('passport');

const contaController = require('../controllers/contaController');
const contasMiddleware = require('../middlewares/contasMiddlewares');


// lista todas as contas 
router.get('/contas', passport.authenticate('jwt', {session: false}), contaController.getAll);

//insere conta
router.post('/contas', passport.authenticate('jwt', {session: false}), contasMiddleware.verifyID, contasMiddleware.validateBody, contaController.createConta);

//deletar conta
router.delete('/contas/:codigo', passport.authenticate('jwt', {session: false}), contasMiddleware.validateCodigo, contaController.deleteConta);

//atualizar conta
router.put('/contas/:codigo', passport.authenticate('jwt', {session: false}), contasMiddleware.validateBody, contasMiddleware.validateCodigo, contaController.updateConta);

//lista todas as contas por id usuário
router.get('/users/contas/:id', passport.authenticate('jwt', {session: false}), contasMiddleware.verifyID, contaController.getAllContasByID);

//lista conta por código
router.get('/contas/:codigo', passport.authenticate('jwt', {session: false}), contasMiddleware.validateCodigo, contaController.getContaByCodigo);



module.exports = router;