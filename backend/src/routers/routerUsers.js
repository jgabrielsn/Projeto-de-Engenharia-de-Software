const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');
const userMiddleware = require('../middlewares/userMiddlewares');
const passport = require('passport');

router.post('/login', usersController.login);

router.post('/register', usersController.register);

router.get('/private', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.status(200).json({success: true, msg: 'You are authorized to view this content'});
});

//retorna todos usuários
router.get('/users', usersController.getAll);

//insere usuário
router.post('/users',userMiddleware.validateBody, usersController.createUser);

//deletar usuário
router.delete('/users/:id', usersController.deleteUser);

//atualizar usuário
router.put('/users/:id', userMiddleware.validateBody, usersController.updateUser);


module.exports = router;