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

router.get('/private', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.status(200).json({success: true, msg: 'You are authorized to view this content'});
});

//retorna todos usuários
router.get('/users', usersController.getAll);

//deletar usuário
router.delete('/users/:id', usersController.deleteUser);

//atualizar nome de usuário
router.put('/users/:id', userMiddleware.validateBody, usersController.updateUser);

//retornar usuário por email
router.get('/users/email/:email', userMiddleware.validateEmail, usersController.getUserByEmail);

//retornar usuário por id
router.get('/users/id/:id', userMiddleware.verifyID, usersController.getUserByID);

//atualizar saldo do usuário
router.post('/users/saldo/:id', userMiddleware.verifyID, usersController.updateSaldo);

//atualizar formulário do usuário
router.post('/users/formulario/:id', userMiddleware.verifyID, usersController.updateFormulario);

//atualizar meta do usuário
router.post('/users/meta/:id', userMiddleware.verifyID, usersController.updateMeta);

//atualizar senha do usuário
router.post('/users/senha/:id', userMiddleware.verifyID, usersController.updateSenha);

module.exports = router;
