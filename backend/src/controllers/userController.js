const userModel = require('../models/userModel');


const getAll = async (_request, response) => {
    const users = await userModel.getAll();
    return response.status(200).json(users);
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

module.exports = {
    getAll,
    createUser,
    deleteUser,
    updateUser
};