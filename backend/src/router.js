const express = require('express');
const router = express.Router();

const usersController = require('./controllers/userController');
const userMiddleware = require('./middlewares/userMiddlewares');

//homepage
router.get('/', (req, res) => res.status(200).send('Hello, world!'));

router.get('/teste', (req, res) => res.status(200).send('Oi, estou testando!'));

// lista todos os usuários
router.get('/users', usersController.getAll);

//insere usuário
router.post('/users',userMiddleware.validateBody, usersController.createUser);

//deletar usuário
router.delete('/users/:id', usersController.deleteUser);

//atualizar usuário
router.put('/users/:id', userMiddleware.validateBody, usersController.updateUser);

module.exports = router;