const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');
const passport = require('passport');

router.post('/login', usersController.login);

router.post('/register', usersController.register);

router.get('/private', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.status(200).json({success: true, msg: 'You are authorized to view this content'});
});

module.exports = router;