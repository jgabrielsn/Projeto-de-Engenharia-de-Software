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

//atualizar usuário
router.put('/users/:id', userMiddleware.validateBody, usersController.updateUser);

router.get('/users/:email', usersController.getUserByEmail);

router.post('/users/saldo/:id', usersController.updateSaldo);

router.post('/users/formulario/:id', usersController.updateFormulario);




module.exports = router;