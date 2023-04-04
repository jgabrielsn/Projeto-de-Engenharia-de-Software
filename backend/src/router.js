const express = require('express');
const usersController = require('./controllers/userControler');

const router = express.Router();

router.get('/', (req, res) => res.status(200).send('Hello, world!'));

// lista todos os usuários
router.get('/users', usersController.getAll);


module.exports = router;