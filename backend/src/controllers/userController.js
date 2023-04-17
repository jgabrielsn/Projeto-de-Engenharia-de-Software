const userModel = require('../models/userModel');
const authModel = require('../models/authModel');
const connection = require('../models/connection');

//metodos de CRUD usuário

const getAll = async (_request, response) => {
    const users = await userModel.getAll();
    return response.status(200).json(users);
};

const getUser = async (request, response) => {
    const { id } = request.params;
    const user = await userModel.getUser(id);
    return response.status(200).json(user);
};

const createUser = async (request, response) => {
    const createdUser = await userModel.createUser(request.body);
    return response.status(201).json(createdUser);
};

const deleteUser = async (request, response) => {
    const { id } = request.params;
    await userModel.deleteUser(id);
    return response.status(204).json();
};

const updateUser = async (request, response) => {
    const { id } = request.params;
    await userModel.updateUser(id, request.body);
    return response.status(204).json();
};

//autenticação com JWT

const login = (request, response) => {
    connection.execute('SELECT * FROM users WHERE Email = ?', [request.body.Email])
        .then(([user]) => {
            if (user.length === 0) {
                response.status(401).json({ success: false, msg: 'Usuário não encontrado' });
            } else {
                const isValid = authModel.validPassword(request.body.Password, user[0].Password, user[0].PasswordSalt);
                if (isValid) {
                    const jwt = authModel.issueJWT(user[0]);
                    response.status(200).json({ success: true, user: user[0], token: jwt.token, expiresIn: jwt.expires });
                } else {
                    response.status(401).json({ success: false, msg: 'Senha incorreta' });
                }
            }
        })
        .catch(err => {
            response.status(400).json({ success: false, msg: err });
        });
};

const register = async (request, response) => {

    userModel.createUser(request.body)
        .then((user) => {
            const jwt = authModel.issueJWT(user);
            response.status(201).json({ success: true, user: user, token: jwt.token, expiresIn: jwt.expires });
        })
        .catch (err => {
            response.status(400).json({ success: false, msg: err });
        });
};

module.exports = {
    getAll,
    getUser,
    createUser,
    deleteUser,
    updateUser,
    login,
    register
};