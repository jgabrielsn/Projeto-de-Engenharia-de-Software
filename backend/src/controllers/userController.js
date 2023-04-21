const userModel = require('../models/userModel');
const authModel = require('../models/authModel');

//metodos de CRUD usuário

const getAll = async (_request, response) => {
    const users = await userModel.getAll();
    return response.status(200).json(users);
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
const getUserByEmail = async (request, response) => {
    const { email } = request.params;
    const user = await userModel.getUserByEmail(email);
    return response.status(200).json(user);
};

//autenticação com JWT

const login = (request, response) => {
    userModel.getUserByEmail(request.body.Email)
        .then((user) => {
            if (user.length === 0) {
                response.status(401).json({ success: false, msg: 'Usuário não encontrado' });
            } else {
                const isValid = authModel.validPassword(request.body.Password, user.Password, user.PasswordSalt);
                if (isValid) {
                    const jwt = authModel.issueJWT(user);
                    response.status(200).json({ success: true, user: user, token: jwt.token, expiresIn: jwt.expires });
                } else {
                    response.status(401).json({ success: false, msg: 'Senha incorreta' });
                }
            }
        })
        .catch(err => {
            console.log(err);
            response.status(400).json({ success: false, msg: err });
        });
};

const register = async (request, response) => {
    try {
        const existingUser = await userModel.getUserByEmail(request.body.Email);
        if (existingUser) {
            return response.status(400).json({ success: false, msg: 'Usuário já cadastrado' });
        }
        const user = await userModel.createUser(request.body);
        const jwt = authModel.issueJWT(user);
        response.status(201).json({ success: true, user: user, token: jwt.token, expiresIn: jwt.expires });
    } catch (err) {
        response.status(400).json({ success: false, msg: err });
    }
};

module.exports = {
    getAll,
    getUserByEmail,
    deleteUser,
    updateUser,
    login,
    register
};