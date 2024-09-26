const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');
const userMiddleware = require('../middlewares/userMiddlewares');
const passport = require('passport');


router.post('/login', userMiddleware.validateBody,
    userMiddleware.validateEmail,
    userMiddleware.validatePassword,
    usersController.login);

router.post('/register', userMiddleware.validateBody,
    userMiddleware.validateEmail,
    userMiddleware.validatePassword,
    userMiddleware.validateName,
    usersController.register);


//retorna todos usuários
router.get('/users', passport.authenticate('jwt', {session: false}), usersController.getAll);

//deletar usuário
router.delete('/users/:id', passport.authenticate('jwt', {session: false}), usersController.deleteUser);

//atualizar nome de usuário
router.put('/users/:id', passport.authenticate('jwt', {session: false}), userMiddleware.validateBody, usersController.updateUser);

//retornar usuário por email
router.get('/users/email/:email', passport.authenticate('jwt', {session: false}), userMiddleware.validateEmail, usersController.getUserByEmail);

//retornar usuário por id
router.get('/users/id/:id', passport.authenticate('jwt', {session: false}), userMiddleware.verifyID, usersController.getUserByID);

//inserir saldo do usuário
router.post('/users/saldo/:id', passport.authenticate('jwt', {session: false}), userMiddleware.verifyID, usersController.updateSaldo);

//inserir formulário do usuário
router.post('/users/formulario/:id', passport.authenticate('jwt', {session: false}), userMiddleware.verifyID, usersController.updateFormulario);

//inserir meta do usuário
router.post('/users/meta/:id', passport.authenticate('jwt', {session: false}), userMiddleware.verifyID, usersController.updateMeta);

//atualizar senha do usuário
router.post('/users/senha/:id', passport.authenticate('jwt', {session: false}), userMiddleware.verifyID, usersController.updateSenha);

module.exports = router;
